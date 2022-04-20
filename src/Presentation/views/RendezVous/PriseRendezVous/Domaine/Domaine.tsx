import { Form } from "macif-components";
import useAttachController from "../../../../hooks/useAttachController";
import useInitContexte from "../../../../hooks/useInitContexte";
import DomaineController from "./DomaineController";

interface DomaineProps {
  readonly controller: DomaineController;
}

export default function Domaine({ controller }: DomaineProps) {
  const { codification } = useAttachController(controller);

  useInitContexte(controller);

  return (
    <Form.Group controlId="assurer">
      <Form.Label required>Votre rendez-vous concerne ?</Form.Label>
      <Form.SwitcherGroup type="radio" nbSwitchers={3} name="assurer" onChange={controller.onChoiceSelected}>
        {codification.map((value, index) => (
          <Form.Switcher key={index} value={value}>
            {value.libelle}
          </Form.Switcher>
        ))}
      </Form.SwitcherGroup>
    </Form.Group>
  );
}
