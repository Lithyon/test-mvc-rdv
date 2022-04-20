import { Form } from "macif-components";
import useAttachController from "../../../hooks/useAttachController";
import Demande from "./Demande";
import Domaine from "./Domaine";
import PriseRendezVousController from "./PriseRendezVousController";

interface PriseRendezVousProps {
  readonly controller: PriseRendezVousController;
}

export default function PriseRendezVous({ controller }: PriseRendezVousProps) {
  const state = useAttachController(controller);

  return (
    <Form className="mcf-mt--5">
      <Domaine />
      {state.domaineSelected && <Demande />}
    </Form>
  );
}
