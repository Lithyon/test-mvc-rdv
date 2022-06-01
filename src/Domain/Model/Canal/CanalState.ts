import {CanalCode} from "../../Data/Enum/Canal";

export default interface CanalState {
    libelle: string,
    code: CanalCode,
    isNew?: boolean
}