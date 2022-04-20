import { Form } from "macif-components";
import DemandeModelView from "./ModelView/DemandeModelView";

export interface DemandeProps {
  readonly onChoiceSelected: Function;
  readonly choiceSelected: string;
  readonly dataSource: Array<DemandeModelView>;
}

export default function Demande({
  onChoiceSelected,
  choiceSelected,
  dataSource,
}: DemandeProps) {
  console.log(choiceSelected)
  return (
    <Form.Group controlId="assurer">
      <Form.Label required>Votre demande concerne ?</Form.Label>
      <Form.SwitcherGroup
        type="radio"
        nbSwitchers={3}
        name="assurer"
        value={choiceSelected}
        onChange={onChoiceSelected}
      >
        {dataSource.map((value, index) => (
          <Form.Switcher key={index} value={value.code}>
            {value.libelle}
          </Form.Switcher>
        ))}
      </Form.SwitcherGroup>
    </Form.Group>
  );
}
