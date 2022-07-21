import React, {MouseEventHandler} from "react";
import {Button} from "macif-components";

export interface DayProps {
    readonly onClick: MouseEventHandler;
    readonly children: string;
    readonly disabled?: boolean;
    readonly striked?: boolean;
    readonly selected?: boolean;
    readonly focus?: boolean;
}

export default function Day({
                                disabled,
                                striked,
                                selected,
                                children,
                                onClick,
                                focus

                            }: DayProps) {
    let classNames = "mcf-p--2 mcf-text--black mcf-border--0 ";
    let variant = "";
    if (!striked) {
        classNames =
            "mcf-p--2 mcf-text--black mcf-border--0 mcf-rounded--circle mcf-font-weight--bold mcf-bg--hover--secondary  ";
        variant = "outline--secondary";
    }

    if (disabled) {
        classNames = "mcf-p--2 mcf-text--black-50 mcf-border--0 mcf-bg--transparent ";
    }

    if (selected) {
        classNames =
            "mcf-p--2 mcf-text--black mcf-border--0 mcf-rounded--circle mcf-font-weight--bold mcf-bg--vert-macif ";
        variant = "outline--secondary";
    }

    return striked ? (
        <span className="mcf-p--2 mcf-border--0 mcf-rounded--circle mcf-text--black-50 mcf-bg--gris-sable mcf-text-decoration--none">
      {children}
    </span>
    ) : (
        <Button
            onClick={onClick}
            className={classNames}
            variant={variant}
            {...(focus
                ? {style: {cursor: "pointer", outline: "auto", color: "#009be1"}}
                : {style: {cursor: "pointer"}})}
        >
            {children}
        </Button>
    );
}




