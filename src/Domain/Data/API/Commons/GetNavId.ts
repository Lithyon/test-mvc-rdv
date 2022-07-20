import {getCookie, setCookie} from "./Cookie";
import {v4 as uuidv4} from "uuid";

export function getNavId() {
    if (!getCookie("navid")) {
        setCookie("navid", uuidv4());
    }
    return getCookie("navid");
}
