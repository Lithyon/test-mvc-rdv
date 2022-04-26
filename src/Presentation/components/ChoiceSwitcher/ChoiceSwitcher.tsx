import {Badge, Form} from "macif-components";

export interface Choice {
    readonly libelle: string;
    readonly code: string;
    readonly isNew?: boolean;
}

export interface ChoiceSwitcherProps<T extends Choice> {
    readonly onChoiceSelected: Function;
    readonly choiceSelected: string;
    readonly dataSource: Array<T>;
    readonly label: string;
    readonly labelInfo?: string;
    readonly id: string;
}

export default function ChoiceSwitcher<T extends Choice>({
                                                             dataSource,
                                                             onChoiceSelected,
                                                             choiceSelected,
                                                             label,
                                                             labelInfo,
                                                             id
                                                         }: ChoiceSwitcherProps<T>) {
    return dataSource.length > 0 ? (
        <Form.Group controlId={id}>
            <Form.Label required>{label}</Form.Label>
            {labelInfo && <Form.Text muted>{labelInfo}</Form.Text>}
            <Form.SwitcherGroup
                type="radio"
                nbSwitchers={3}
                name={id}
                value={choiceSelected}
                onChange={onChoiceSelected}
            >
                {dataSource.map((value, index) => {
                    return (
                        <Form.Switcher key={index} value={value.code}>
                            {value.isNew && <Badge variant="info" className="mcf-badge--new-switcher" pill>Nouveau</Badge>}
                            {value.libelle}
                        </Form.Switcher>
                    );
                })}
            </Form.SwitcherGroup>
        </Form.Group>
    ) : <></>;
}
