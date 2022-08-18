import {CodeMessageApplicatif} from "../../Enum/CodeMessageApplicatif";

export interface ErrorEntity {
    codeMessageApplicatif: CodeMessageApplicatif;
    field: string;
    message: string;
    messageApplicatif: MessageApplicatifEntity;
    object: string;
    type: string;
}

export interface MessageApplicatifEntity {
    codeMessageApplicatif: CodeMessageApplicatif;
    libelle: string;
    libelleLong: string;
    libelleTechnique: string;
}

