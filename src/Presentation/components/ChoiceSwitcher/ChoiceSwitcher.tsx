import {Badge, Form} from "macif-components";

export interface Choice {
    readonly libelle: string;
    readonly code: string | number;
    readonly isNew?: boolean;
}

export interface ChoiceSwitcherProps<T extends Choice> {
    readonly onChoiceSelected: Function;
    readonly choiceSelected: T;
    readonly dataSource: Array<T>;
    readonly label: string;
    readonly labelInfo?: string;
    readonly id: string;
    readonly show?: boolean;
    readonly nbSwitchers?: number;
    readonly errorMessage?: string;
}

export default function ChoiceSwitcher<T extends Choice>({
                                                             dataSource,
                                                             onChoiceSelected,
                                                             choiceSelected,
                                                             label,
                                                             labelInfo,
                                                             id,
                                                             show = true,
                                                             nbSwitchers = 3,
                                                             errorMessage = ""
                                                         }: ChoiceSwitcherProps<T>) {
    return show && dataSource.length > 0 ? (
        <Form.Group controlId={id}>
            <Form.Label as="h3" id={id} className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">{label}</Form.Label>
            {labelInfo && <Form.Text muted>{labelInfo}</Form.Text>}
            <Form.SwitcherGroup
                type="radio"
                role="radiogroup"
                aria-labelledby={id}
                nbSwitchers={nbSwitchers}
                name={id}
                value={choiceSelected}
                onChange={onChoiceSelected}
                isInvalid={errorMessage !== ""}
            >
                {dataSource.map((value, index) => {
                    return (
                        <Form.Switcher id={id + value.libelle + value.code + index} key={index} value={value}
                                       className="mcf-btn--switcher--outline">
                            {value.isNew &&
                                <Badge variant="info" className="mcf-badge--new-switcher" pill>Nouveau</Badge>}
                            {value.libelle}
                        </Form.Switcher>
                    );
                })}
            </Form.SwitcherGroup>
            <Form.Control.Feedback type="invalid">
                <span className="icon icon-erreur"></span>
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    ) : <></>;
}
