import Communes from "../../../../../Domain/Model/Communes/Communes";
import {CommunesModelView} from "./CommunesModelView";
import {CommuneModelView} from "./CommuneModelView";

export default class CommunesModelViewBuilder {
    static buildFromCommunes(communes: Communes): CommunesModelView {
        return {
            communes: communes.state.communes.map(value => ({
                nom: value.nom,
                codePostal: value.codePostal,
                lieuDit: value.lieuDit,
                nomAcheminement: value.nomAcheminement,
                ancienNom: value.ancienNom
            }))
        }
    }

    static buildEmpty() {
        return {
            communes: [] as CommuneModelView[]
        }
    }
}