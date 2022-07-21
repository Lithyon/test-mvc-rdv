export default class FormErrorModelViewBuilder {
    // static buildFromErrors(errors: FormErrorModelView) {
    //     return Object.entries(errors).map((error) => {
    //         const [, value] = error;
    //         return value ?? error
    //     });
    // }

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
            informationsCommercialesTelephone: ""
        };
    }
}
