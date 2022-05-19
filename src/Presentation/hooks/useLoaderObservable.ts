import {LoadingObservable} from "../commons/LoadingObservable";
import LoadingEvent from "../commons/LoadingEvent/LoadingEvent";
import {useEffect, useState} from "react";

export default function useLoaderObservable(observed: LoadingObservable): LoadingEvent {
    const [loading, setLoading] = useState({isOver: false});

    useEffect(() => {
        const handler = (event: any) => setLoading(event);

        observed.subscribeOnLoad(handler);

        return () => observed.unsubscribeOnLoad(handler);
    }, [observed]);

    return loading;
}