import {useEffect, useState} from "react";
import { Controller } from "../commons/Controller";

export default function useAttachController<T>(controller: Controller<T>) {
    const [state, setState] = useState(controller.state);

    useEffect(() => {
        const onStateChangedHanlder = () => {
            setState(controller.state);
        };
        controller.subscribeStateChanged(onStateChangedHanlder);

        return (() => controller.unsubscribeStateChanged(onStateChangedHanlder));
    }, [controller, state]);

    return state;
}
