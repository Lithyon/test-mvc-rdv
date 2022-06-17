import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {InformationsCommercialesModelView} from "../InformationsCommerciales/InformationsCommercialesModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly informationsCommercialesEmail: InformationsCommercialesModelView;
    readonly informationsCommercialesSms: InformationsCommercialesModelView;
    readonly informationsCommercialesTelephone: InformationsCommercialesModelView;
}