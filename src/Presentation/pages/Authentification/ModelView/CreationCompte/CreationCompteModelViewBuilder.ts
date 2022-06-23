import CiviliteModelViewBuilder from "../Civilite/CiviliteModelViewBuilder";
import InformationsCommercialesModelViewBuilder from "../InformationsCommerciales/InformationsCommercialesModelViewBuilder";
import ParrainageChoixModelViewBuilder from "../Parrainage/ParrainageChoixModelViewBuilder";
import ParrainageNumeroSocietaireModelViewBuilder from "../Parrainage/ParrainageNumeroSocietaireModelViewBuilder";

export default class CreationCompteModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: CiviliteModelViewBuilder.buildEmpty(),
            parrainageChoix: ParrainageChoixModelViewBuilder.buildEmpty(),
            parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: InformationsCommercialesModelViewBuilder.buildEmpty(),
            informationsCommercialesSms: InformationsCommercialesModelViewBuilder.buildEmpty(),
            informationsCommercialesTelephone: InformationsCommercialesModelViewBuilder.buildEmpty(),
        }
    }
}