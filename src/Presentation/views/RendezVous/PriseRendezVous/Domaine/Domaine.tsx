import { Form } from "macif-components";
import DomaineModelView from "./ModelView/DomaineModelView";

export interface DomaineProps {
  readonly onChoiceSelected: Function;
  readonly choiceSelected: string;
  readonly dataSource: Array<DomaineModelView>;
}

export default function Domaine({
  dataSource,
  onChoiceSelected,
  choiceSelected,
}: DomaineProps) {
  return (
    <Form.Group controlId="assurer">
      <Form.Label required>Votre rendez-vous concerne ?</Form.Label>
      <Form.SwitcherGroup
        type="radio"
        nbSwitchers={3}
        name="assurer"
        defaultValue={choiceSelected}
        onChange={onChoiceSelected}
      >
        {dataSource.map((value, index) => {
          return (
            <Form.Switcher key={index} value={value.code}>
              {value.libelle}
            </Form.Switcher>
          );
        })}
      </Form.SwitcherGroup>
    </Form.Group>
  );
}
