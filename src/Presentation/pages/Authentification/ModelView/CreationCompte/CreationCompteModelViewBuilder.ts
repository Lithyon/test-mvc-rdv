import CiviliteModelViewBuilder from "../Civilite/CiviliteModelViewBuilder";
import InformationsCommercialesModelViewBuilder from "../InformationsCommerciales/InformationsCommercialesModelViewBuilder";

export default class CreationCompteModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: CiviliteModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: InformationsCommercialesModelViewBuilder.buildEmpty(),
            informationsCommercialesSms: InformationsCommercialesModelViewBuilder.buildEmpty(),
            informationsCommercialesTelephone: InformationsCommercialesModelViewBuilder.buildEmpty(),
        }
    }
}