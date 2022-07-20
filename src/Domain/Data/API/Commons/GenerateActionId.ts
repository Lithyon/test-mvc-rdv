import {getNavId} from "./GetNavId";

export function generateActionId() {
    const time = new Date().getTime();
    return `${getNavId()}${time}`;
}
