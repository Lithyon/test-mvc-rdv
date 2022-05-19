import {CanalCode} from "../../../../Domain/Repository/Data/Enum/Canal";

export default interface CanalModelView {
    libelle: string,
    code: CanalCode,
    isNew?: boolean,
}