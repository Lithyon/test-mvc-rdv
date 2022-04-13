import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type DataChangedHandler = () => void;
export type ViewDataChangedHandler<T> = (newValue: T) => void;

export interface ObservableContext {
  subscribeDataChanged(
    fieldName: string,
    onDataChangedHandler: DataChangedHandler
  ): void;
  unsubscribeDataChanged(
    fieldName: string,
    onDataChangedHandler: DataChangedHandler
  ): void;
}

export interface BindingParameters {
  readonly dataContext: ObservableContext;
  readonly propertyName: string;
}

export interface BindedProperty<T> {
  readonly value: T;
  readonly onChange: ChangeEventHandler<HTMLInputElement>;
  readonly onValueChange: ViewDataChangedHandler<T>;
}

function _initOnPropertyChangedHandler<T>(
  dataContexte: ObservableContext,
  propertyName: string,
  setValue: Dispatch<SetStateAction<T>>
) {
  return () => setValue((dataContexte as any)[propertyName]);
}

function _verifyPropertyExistOrThrow(
  dataContext: ObservableContext,
  propertyName: string
) {
  if (
    !dataContext.hasOwnProperty(propertyName) &&
    !dataContext.constructor.prototype.hasOwnProperty(propertyName)
  ) {
    throw new Error(
      `Le champs ${propertyName} n'existe pas pour la classe ${dataContext.constructor.name}`
    );
  }
}

export function useOneWayBinding<T>({
  dataContext,
  propertyName,
}: BindingParameters): T {
  _verifyPropertyExistOrThrow(dataContext, propertyName);

  const [value, setValue] = useState<T>((dataContext as any)[propertyName]);

  useEffect(() => {
    const onPropertyChangedHanlder = _initOnPropertyChangedHandler(
      dataContext,
      propertyName,
      setValue
    );
    dataContext.subscribeDataChanged(propertyName, onPropertyChangedHanlder);

    onPropertyChangedHanlder();
    return () => {
      dataContext.unsubscribeDataChanged(
        propertyName,
        onPropertyChangedHanlder
      );
    };
  }, [value, propertyName, dataContext]);

  return value;
}

export function useTwoWayBinding<T>({
  dataContext,
  propertyName,
}: BindingParameters): BindedProperty<T> {
  const value = useOneWayBinding<T>({ dataContext, propertyName });

  const onBindedFieldChanged = (newValue: any) => {
    (dataContext as any)[propertyName] = newValue;
  };

  return {
    value,
    onChange: (event) => {
      const {
        target: { value, checked, type },
      } = event;

      if (type === "checked") {
        onBindedFieldChanged(checked);
      } else {
        onBindedFieldChanged(value);
      }
    },
    onValueChange: onBindedFieldChanged,
  };
}
