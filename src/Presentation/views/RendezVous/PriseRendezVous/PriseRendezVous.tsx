import { Form } from "macif-components";
import useAttachController from "../../../hooks/useAttachController";
import useInitContexte from "../../../hooks/useInitContexte";
import Demande from "./Demande";
import Domaine from "./Domaine";
import PriseRendezVousController from "./PriseRendezVousController";

interface PriseRendezVousProps {
  readonly controller: PriseRendezVousController;
}

export default function PriseRendezVous({ controller }: PriseRendezVousProps) {
  const state = useAttachController(controller);

  useInitContexte(controller)

  return (
    <Form className="mcf-mt--5">
      <Domaine
        onChoiceSelected={controller.onDomaineSelected}
        choiceSelected={state.domaineSelected}
        dataSource={state.domaine}
      />
      <Demande
        onChoiceSelected={controller.onDemandeSelected}
        choiceSelected={state.demandeSelected}
        dataSource={state.demande}
      />
      <div>{JSON.stringify(state)}</div>
    </Form>
  );
}
