interface AdresseEntity {
    inAdrPost: boolean,
    inAdrStatut: boolean,
    dtEffetAdrPers: string,
    noVoiePers: string,
    cdNoVoie: string,
    liNoVoie: string,
    cdNatuVoie: string,
    liNatuVoie: string,
    nmVoiePers: string,
    nmResPers: string,
    noBatPers: string,
    noEntreePers: string,
    noEscaPers: string,
    noAppartPers: string,
    znComplDest: string,
    cdInseeCommu: string,
    cdInseeLieuDit: string,
    cdPost: string,
    nmCommuPers: string,
    nmLieuDitPers: string,
    cdPays: string,
    liPays: string,
    noDeptInseePers: string,
    noInseePers: number,
    cdTyAdrPers: string,
    cdNormAdr: string,
    noDeptInseePersLieuDit: string,
    noDeptInseeLocalLieuDit: string,
    noInseeLocal: number,
    znAdrPers: string,
    inAdrTransco: boolean,
    inCedex: boolean,
    inInseeLieuDitPers: boolean,
    znAdrLigne1: string,
    znAdrLigne2: string,
    znAdrLigne3: string,
    znAdrLigne4: string,
    znAdrLigne5: string,
    znAdrLigne6: string
}

interface EmailEntity {
    fiable: boolean,
    znAdrEmail: string
}

interface PreferenceContactEntity {
    inAcceptRelanMailMacif: boolean,
    inAcceptRelanMessageVocal: boolean,
    inAcceptRelanPartenaire: boolean,
    inAcceptRelanSmsMacif: boolean
}

interface PreferencesDematerialisationEntity {
    receptionCourrierAssuScol: boolean,
    receptionCourrierAvisEcheance: boolean,
    receptionCourrierRCLoc: boolean
}

interface TelephoneTemporaireEntity {
    cdPays: string,
    dtDebPeriodTempTele: string,
    dtFinPeriodTempTele: string,
    noTeleLigne: string
}

interface TelephoneEntity {
    cdLieuAppelTele: number,
    liLieuAppelTele: string,
    noTeleLigne: string
}

export default interface ContactEntity {
    adresses?: Array<AdresseEntity>,
    email: EmailEntity,
    preferencesContact?: PreferenceContactEntity,
    preferencesDematerialisation?: PreferencesDematerialisationEntity,
    telephoneTemporaire?: TelephoneTemporaireEntity,
    telephones: Array<TelephoneEntity>
}
