import {Canal} from "../Repository/Data/Enum/Canal";

export default interface CanalService {
    getDefaultCanal(): Array<Canal>;
}
