import PointAccueil from "../../../../../Domain/Model/PointAccueil/PointAccueil";
import BandeauPointAccueilModelView from "./BandeauPointAccueilModelView";

export default class BandeauPointAccueilModelViewBuilder {
    static buildFromPointAccueil(
        pointAccueil: PointAccueil
    ): BandeauPointAccueilModelView {
        return {
            cdBuro: pointAccueil.state.cdBuro,
            nomPointAccueil: pointAccueil.state.liBuro,
            telPointAccueil: pointAccueil.state.noTeleLigne,
            noVoie: pointAccueil.state.noVoie,
            typeVoie: pointAccueil.state.liNatuVoie,
            nomVoie: pointAccueil.state.nmVoie,
            codePostal: pointAccueil.state.cdPost,
            commune: pointAccueil.state.nmCommu,
            isAgenceVirtuelle: pointAccueil.state.isAgenceVirtuelle,
            srcImgPointAccueil: `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${pointAccueil.state.cdBuro}.jpg`,
            urlPointAccueil: `https://agence.macif.fr/assurance/proxy.asp?agenceid=${pointAccueil.state.cdBuro}`,
            horairesOuvertureFermetures: pointAccueil.state.horairesOuvertureFermetures,
        };
    }

    static buildEmpty(): BandeauPointAccueilModelView {
        return {
            cdBuro: "",
            nomPointAccueil: "",
            telPointAccueil: "",
            noVoie: "",
            typeVoie: "",
            nomVoie: "",
            codePostal: "",
            commune: "",
            srcImgPointAccueil: "",
            urlPointAccueil: "",
            isAgenceVirtuelle: false,
            horairesOuvertureFermetures: [],
        };
    }
}
