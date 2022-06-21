import React from "react";
import {Alert} from "macif-components";

interface DisplayErrorProps {
    children?: JSX.Element | string;
}

export default function DisplayError({children = "Une erreur est survenue"}: DisplayErrorProps) {
    return <Alert variant="danger">
        {children}
    </Alert>;
}
