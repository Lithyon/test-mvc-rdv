import { Form } from "macif-components";
import useAttachController from "../../../../hooks/useAttachController";
import useInitContexte from "../../../../hooks/useInitContexte";
import DemandeController from "./DemandeController";

interface DemandeProps {
  readonly controller: DemandeController;
}

export default function Demande({ controller }: DemandeProps) {
  const { codification } = useAttachController(controller);

  useInitContexte(controller);

  return (
    <Form.Group controlId="assurer">
      <Form.Label required>Votre demande concerne ?</Form.Label>
      <Form.SwitcherGroup type="radio" nbSwitchers={3} name="assurer">
        {codification.map((value, index) => (
          <Form.Switcher key={index} value={value.code}>
            {value.libelle}
          </Form.Switcher>
        ))}
      </Form.SwitcherGroup>
    </Form.Group>
  );
}
