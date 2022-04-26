export enum CanalCode {
    TELEPHONE = "tel",
    AGENCE = "agence",
    VISIO = "visio"
}

export interface CanalDetail {
    readonly libelle: string,
    readonly code: CanalCode,
    readonly isNew?: boolean,
}

const DefaultCanal: Array<CanalDetail> = [{
    libelle: "En agence",
    code: CanalCode.AGENCE
}, {
    libelle: "Par téléphone",
    code: CanalCode.TELEPHONE
}, {
    libelle: "En visioconférence",
    code: CanalCode.VISIO,
    isNew: true,
}]

export default DefaultCanal;