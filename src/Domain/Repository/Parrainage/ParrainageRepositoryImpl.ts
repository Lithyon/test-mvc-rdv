import {ParrainageRepositoryDependencies} from "./ParrainageRepository";
import {ParrainageChoixModelView} from "../../../Presentation/pages/Authentification/ModelView/Parrainage/ParrainageChoixModelView";

export default class ParrainageRepositoryImpl {

    constructor(readonly dependencies: ParrainageRepositoryDependencies) {
    }

    getDefautParrainageChoix(): Array<ParrainageChoixModelView> {
        return this.dependencies.defautParrainageChoix;
    }
}