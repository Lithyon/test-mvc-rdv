import {ChoixConnexionRepositoryDependencies} from "./ChoixConnexionRepository";
import {ChoixConnexion} from "../../Data/Enum/ChoixConnexion";

export default class ChoixConnexionRepositoryImpl {

    constructor(readonly dependencies: ChoixConnexionRepositoryDependencies) {
    }

    getDefaultChoixConnexion(): Array<ChoixConnexion> {
        return this.dependencies.defaultChoixConnexion;
    }
}
