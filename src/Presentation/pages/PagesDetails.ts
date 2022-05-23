interface PagesDetail {
    readonly name: string,
    readonly link: string
}

export default class PagesDetails {
    static get RendezVous(): PagesDetail {
        return {
            name: "Prendre Rendez Vous",
            link: "/"
        }
    }

    static get Auth(): PagesDetail {
        return {
            name: "Authentification",
            link: "/authentication"
        }
    }
}