import {CanalCode} from "../../../../../Domain/Data/Enum/Canal";

export default interface CanalModelView {
    libelle: string,
    code: CanalCode | string,
    isNew?: boolean,
}
