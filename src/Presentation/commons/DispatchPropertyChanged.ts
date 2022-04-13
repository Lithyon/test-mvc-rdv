import ObservableViewModel from "./ObservableViewModel";

interface DispatchPropertyChangedParameters {
    readonly isMethod?:boolean;
}

export default function DispatchPropertyChanged(fieldName?:string, parameters?:DispatchPropertyChangedParameters) {
    return parameters?.isMethod ? _dispatchOnMethod(fieldName) : _dispatchOnProperty(fieldName);

}

function _dispatchOnMethod(fieldName: string | undefined) {
    if (!fieldName) {
        throw Error('Le nom de la méthode est obligatoire');
    }

    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const f = descriptor.value as (...args:any[])=>any;

        descriptor.value = function (...args:any[]) {
            f.apply(this, args);

            const currentTarget = this as ObservableViewModel;
            currentTarget.dispatchDataChanged(fieldName);
        } ;
    };
}

function _dispatchOnProperty(fieldName?:string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const setter = descriptor.set;

        descriptor.set = function (v) {
            if (setter) {
                const s = setter.bind(this);
                s(v);
            }
            const currentTarget = this as ObservableViewModel;
            currentTarget.dispatchDataChanged(fieldName || propertyKey);
        }
    };
}
