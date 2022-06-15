import {Alert} from "macif-components";

interface DisplayErrorProps {
    message?: string
}

export default function DisplayError({message = "Une erreur est survenue"}: DisplayErrorProps) {
    return <Alert variant="danger">
        {message}
    </Alert>;
}