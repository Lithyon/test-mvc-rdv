import Controller from "../commons/Controller";
import {useEffect} from "react";

export default function useInitContexte<T>(controller:Controller<T>) {
    useEffect(() => controller.onLoad(), [controller]);
}
