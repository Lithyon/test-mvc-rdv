import {CiviliteCode} from "../../Enum/DefaultCivilite";

interface IdentiteSanteIndividuelleEntity {
    codeLocalisation: string,
    entiteRattachement: string,
    identifiantSante: string,
    inContratActif: boolean,
    numSecuSociale: string
}

interface IdentiteSanteCollectiveEntity {
    cdCivil: CiviliteCode,
    dtNaisPers: string,
    entiteRattachement: number,
    liCivil: string,
    nmPers: string,
    numSecuSociale: number,
    numeroAdhesionSanteCollective: number,
    znEmail: string,
    znPrenPers: string
}

interface IdentiteMutavieAssuranceVieEntity {
    noPersAssuranceVie: string
}

interface PieceIndentiteEntity {
    cdTyPieceIdent: string,
    dtDelivPieceIdent: string,
    dtFinValidPieceIdent: string
}

interface InfosAdministrativesEntity {
    cdPaysNatio: string,
    cdTrancheRevenuMensFisc: string,
    inRefusCommunicNatio: boolean,
    inRefusCommunicPieceIdent: boolean,
    inRefusCommunicRevenu: boolean,
    pieceIdentiteList: Array<PieceIndentiteEntity>
}

interface IndentiteMacifEntity {
    cdCent: string,
    cdCivil: string,
    cdFracPaymtSoc: string,
    cdMotifRadiation: string,
    cdNatuPers: string,
    cdPaysNaisPers: string,
    cdProfPers: string,
    cdProfilAcces: string,
    cdRegio: string,
    cdSexe: string,
    cdSituatFamil: string,
    dtAdhSoc: string,
    dtDernModifSoc: string,
    dtNaisPers: string,
    inProspect: boolean,
    inSocietaire: boolean,
    inSocietaireRadie: boolean,
    infosAdministratives: InfosAdministrativesEntity,
    liFracPaymt: string,
    nmCommuNaisPers: string,
    nmCommuPers: string,
    nmJeuneFille: string,
    nmLieuDitPers: string,
    nmPers: string,
    noDeptAdresseStat: string,
    noDeptNaisPers: string,
    noPers: number,
    noProsp: number,
    noSoc: number,
    znInInconnuEmail: boolean,
    znPrenPers: string
}

interface IdentiteCompteEntity {
    cdCivil: string,
    dateNaissance: string,
    mail: string,
    mobile: string,
    nom: string,
    prenom: string
}

export default interface IdentiteEntity {
    dtDerniereConnexion: string,
    dtNaisPers: string,
    identiteCompte: IdentiteCompteEntity,
    identiteMacif: IndentiteMacifEntity,
    identiteMutavieAssuranceVie: IdentiteMutavieAssuranceVieEntity,
    identiteSanteCollective: IdentiteSanteCollectiveEntity,
    identiteSanteIndividuelle: IdentiteSanteIndividuelleEntity,
    inConnueMacif: boolean,
    inConnueSanteCollective: boolean,
    inConnueSanteIndividuelle: boolean,
    inSISanteCollectiveAccessible: boolean,
    inSISanteIndividuelleAccessible: boolean,
    nmPers: string,
    noInternet: string,
    znPrenPers: string
}
