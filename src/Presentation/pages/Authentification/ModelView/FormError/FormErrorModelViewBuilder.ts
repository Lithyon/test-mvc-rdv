export default class FormErrorModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: "",
            nom: "",
            prenom: "",
            numeroTelephone: "",
            email: "",
            noSocietaireParrain: "",
            informationsCommercialesEmail: "",
            informationsCommercialesSms: "",
            informationsCommercialesTelephone: ""
        };
    }
}