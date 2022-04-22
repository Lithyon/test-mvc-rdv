import {Form} from "macif-components";

export interface Choice {
    readonly libelle: string;
    readonly code: string;
}

export interface ChoiceSwitcherProps<T extends Choice> {
    readonly onChoiceSelected: Function;
    readonly choiceSelected: string;
    readonly dataSource: Array<T>;
    readonly label: string;
}

export default function ChoiceSwitcher<T extends Choice>({
                                                             dataSource,
                                                             onChoiceSelected,
                                                             choiceSelected,
                                                             label
                                                         }: ChoiceSwitcherProps<T>) {
    return (
        <Form.Group controlId="assurer">
            <Form.Label required>{label}</Form.Label>
            <Form.SwitcherGroup
                type="radio"
                nbSwitchers={3}
                name="assurer"
                value={choiceSelected}
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
