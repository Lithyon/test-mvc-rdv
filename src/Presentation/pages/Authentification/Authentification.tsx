import {Button} from "macif-components";
import AuthentificationController from "./AuthentificationController";
import BandeauModification from "./BandeauModification/BandeauModification";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

export default function Authentification({controller}: AuthentificationProps) {
    return <>
        <BandeauModification dataSource={controller.state.rendezVous} />
        <Button className="mcf-mt--7">Previous</Button>
    </>
}