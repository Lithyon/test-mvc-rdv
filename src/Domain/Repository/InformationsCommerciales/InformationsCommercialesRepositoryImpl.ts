import {InformationsCommercialesRepositoryDependencies} from "./InformationsCommercialesRepository";
import {
    InformationsCommercialesModelView
} from "../../../Presentation/pages/Authentification/ModelView/InformationsCommerciales/InformationsCommercialesModelView";

export default class InformationsCommercialesRepositoryImpl {

    constructor(readonly dependencies: InformationsCommercialesRepositoryDependencies) {
    }

    getDefaultInformationsCommerciales(): Array<InformationsCommercialesModelView> {
        return this.dependencies.defaultInformationsCommerciales
    }
}