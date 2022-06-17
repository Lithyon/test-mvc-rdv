import {CiviliteRepositoryDependencies} from "./CiviliteRepository";
import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";

export default class CiviliteRepositoryImpl {

    constructor(readonly dependencies: CiviliteRepositoryDependencies) {
    }

    getDefaultCivilite(): Array<CiviliteModelView> {
        return this.dependencies.defaultCivilite
    }
}