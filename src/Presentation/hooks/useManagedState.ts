import {useEffect, useState} from "react";

export default function useManagedState(dynamicValue: any) {
    const [value, setValue] = useState(dynamicValue);

    useEffect(() => {
        setValue(dynamicValue);
    }, [dynamicValue]);

    return [value, setValue];
}
