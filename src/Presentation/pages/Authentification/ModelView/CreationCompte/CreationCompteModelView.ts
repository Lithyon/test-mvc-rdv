import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {InformationsCommercialesModelView} from "../InformationsCommerciales/InformationsCommercialesModelView";
import {ParrainageChoixModelView} from "../Parrainage/ParrainageChoixModelView";
import {ParrainageNumeroSocietaireModelView} from "../Parrainage/ParrainageNumeroSocietaireModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly parrainageChoix: ParrainageChoixModelView;
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView;
    readonly informationsCommercialesEmail: InformationsCommercialesModelView;
    readonly informationsCommercialesSms: InformationsCommercialesModelView;
    readonly informationsCommercialesTelephone: InformationsCommercialesModelView;
}