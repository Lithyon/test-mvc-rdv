import {useEffect, useState} from "react";
import {ErrorObservable} from "../commons/ErrorObservable";
import ErrorEvent from "../commons/ErrorEvent/ErrorEvent";

export default function useErrorObservable(observed: ErrorObservable): ErrorEvent {
    const [error, setError] = useState({hasError: false});

    useEffect(() => {
        const handler = (event: any) => setError(event);

        observed.subscribeHasError(handler);

        return () => observed.unsubscribeHasError(handler);
    }, [observed]);

    return error;
}
