export default class FormErrorModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: "",
            nom: "",
            prenom: "",
            numeroTelephone: "",
            email: "",
            dateNaissance: "",
            situationFamiliale: "",
            profession: "",
            noSocietaireParrain: "",
            commune: "",
            informationsCommercialesEmail: "",
            informationsCommercialesSms: "",
            informationsCommercialesTelephone: "",
            autreChoix: "",
            choixContact: ""
        };
    }
}
