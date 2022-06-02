import {Badge, Form} from "macif-components";

export interface Choice {
    readonly libelle: string;
    readonly code: string | number;
    readonly isNew?: boolean;
}

export interface ChoiceSwitcherProps<T extends Choice> {
    readonly onChoiceSelected: Function;
    readonly choiceSelected: string | number;
    readonly dataSource: Array<T>;
    readonly label: string;
    readonly labelInfo?: string;
    readonly id: string;
    readonly show?: boolean;
    readonly nbSwitchers?: number;
}

export default function ChoiceSwitcher<T extends Choice>({
                                                             dataSource,
                                                             onChoiceSelected,
                                                             choiceSelected,
                                                             label,
                                                             labelInfo,
                                                             id,
                                                             show = true,
                                                             nbSwitchers = 3
                                                         }: ChoiceSwitcherProps<T>) {
    return show && dataSource.length > 0 ? (
        <Form.Group controlId={id}>
            <h3 id={id} className="mcf-text--small-1">{label}</h3>
            {labelInfo && <Form.Text muted>{labelInfo}</Form.Text>}
            <Form.SwitcherGroup
                type="radio"
                role="radiogroup"
                aria-labelledby={id}
                nbSwitchers={nbSwitchers}
                name={id}
                value={choiceSelected}
                onChange={onChoiceSelected}
            >
                {dataSource.map((value, index) => {
                    return (
                        <Form.Switcher id={value.libelle + value.code + index} key={index} value={value.code}>
                            {value.isNew &&
                                <Badge variant="info" className="mcf-badge--new-switcher" pill>Nouveau</Badge>}
                            {value.libelle}
                        </Form.Switcher>
                    );
                })}
            </Form.SwitcherGroup>
        </Form.Group>
    ) : <></>;
}
