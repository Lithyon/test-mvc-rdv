import {CiviliteCode} from "../../Data/Enum/DefaultCivilite";

interface IdentiteSanteIndividuelleState {
    codeLocalisation: string,
    entiteRattachement: string,
    identifiantSante: string,
    inContratActif: boolean,
    numSecuSociale: string
}

interface IdentiteSanteCollectiveState {
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

interface IdentiteMutavieAssuranceVieState {
    noPersAssuranceVie: string
}

interface PieceIndentiteState {
    cdTyPieceIdent: string,
    dtDelivPieceIdent: string,
    dtFinValidPieceIdent: string
}

interface InfosAdministrativesState {
    cdPaysNatio: string,
    cdTrancheRevenuMensFisc: string,
    inRefusCommunicNatio: boolean,
    inRefusCommunicPieceIdent: boolean,
    inRefusCommunicRevenu: boolean,
    pieceIdentiteList: Array<PieceIndentiteState>
}

interface IndentiteMacifState {
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
    infosAdministratives: InfosAdministrativesState,
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

interface IdentiteCompteState {
    cdCivil: string,
    dateNaissance: string,
    mail: string,
    mobile: string,
    nom: string,
    prenom: string
}

export default interface IdentiteState {
    dtDerniereConnexion: string,
    dtNaisPers: string,
    identiteCompte: IdentiteCompteState,
    identiteMacif: IndentiteMacifState,
    identiteMutavieAssuranceVie: IdentiteMutavieAssuranceVieState,
    identiteSanteCollective: IdentiteSanteCollectiveState,
    identiteSanteIndividuelle: IdentiteSanteIndividuelleState,
    inConnueMacif: boolean,
    inConnueSanteCollective: boolean,
    inConnueSanteIndividuelle: boolean,
    inSISanteCollectiveAccessible: boolean,
    inSISanteIndividuelleAccessible: boolean,
    nmPers: string,
    noInternet: string,
    znPrenPers: string
}
