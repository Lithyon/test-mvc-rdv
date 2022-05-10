export enum CanalCode {
    TELEPHONE = "tel",
    AGENCE = "agence",
    VISIO = "visio"
}

export interface Canal {
    readonly libelle: string,
    readonly code: CanalCode,
    readonly isNew?: boolean,
}

const DefaultCanal: Array<Canal> = [{
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