import {CiviliteCode} from "../../Enum/DefaultCivilite";

interface IdentiteSanteIndividuelleEntity {
    readonly codeLocalisation: string,
    readonly entiteRattachement: string,
    readonly identifiantSante: string,
    readonly inContratActif: boolean,
    readonly numSecuSociale: string
}

interface IdentiteSanteCollectiveEntity {
    readonly cdCivil: CiviliteCode,
    readonly dtNaisPers: string,
    readonly entiteRattachement: number,
    readonly liCivil: string,
    readonly nmPers: string,
    readonly numSecuSociale: number,
    readonly numeroAdhesionSanteCollective: number,
    readonly znEmail: string,
    readonly znPrenPers: string
}

interface IdentiteMutavieAssuranceVieEntity {
    readonly noPersAssuranceVie: string
}

interface PieceIndentiteEntity {
    readonly cdTyPieceIdent: string,
    readonly dtDelivPieceIdent: string,
    readonly dtFinValidPieceIdent: string
}

interface InfosAdministrativesEntity {
    readonly cdPaysNatio: string,
    readonly cdTrancheRevenuMensFisc: string,
    readonly inRefusCommunicNatio: boolean,
    readonly inRefusCommunicPieceIdent: boolean,
    readonly inRefusCommunicRevenu: boolean,
    readonly pieceIdentiteList: Array<PieceIndentiteEntity>
}

interface IndentiteMacifEntity {
    readonly cdCent: string,
    readonly cdCivil: string,
    readonly cdFracPaymtSoc: string,
    readonly cdMotifRadiation: string,
    readonly cdNatuPers: string,
    readonly cdPaysNaisPers: string,
    readonly cdProfPers: string,
    readonly cdProfilAcces: string,
    readonly cdRegio: string,
    readonly cdSexe: string,
    readonly cdSituatFamil: string,
    readonly dtAdhSoc: string,
    readonly dtDernModifSoc: string,
    readonly dtNaisPers: string,
    readonly inProspect: boolean,
    readonly inSocietaire: boolean,
    readonly inSocietaireRadie: boolean,
    readonly infosAdministratives: InfosAdministrativesEntity,
    readonly liFracPaymt: string,
    readonly nmCommuNaisPers: string,
    readonly nmCommuPers: string,
    readonly nmJeuneFille: string,
    readonly nmLieuDitPers: string,
    readonly nmPers: string,
    readonly noDeptAdresseStat: string,
    readonly noDeptNaisPers: string,
    readonly noPers: number,
    readonly noProsp: number,
    readonly noSoc: number,
    readonly znInInconnuEmail: boolean,
    readonly znPrenPers: string
}

interface IdentiteCompteEntity {
    readonly cdCivil: string,
    readonly dateNaissance: string,
    readonly mail: string,
    readonly mobile: string,
    readonly nom: string,
    readonly prenom: string
}

export default interface IdentiteEntity {
    readonly dtDerniereConnexion: string,
    readonly dtNaisPers: string,
    readonly identiteCompte: IdentiteCompteEntity,
    readonly identiteMacif: IndentiteMacifEntity,
    readonly identiteMutavieAssuranceVie: IdentiteMutavieAssuranceVieEntity,
    readonly identiteSanteCollective: IdentiteSanteCollectiveEntity,
    readonly identiteSanteIndividuelle: IdentiteSanteIndividuelleEntity,
    readonly inConnueMacif: boolean,
    readonly inConnueSanteCollective: boolean,
    readonly inConnueSanteIndividuelle: boolean,
    readonly inSISanteCollectiveAccessible: boolean,
    readonly inSISanteIndividuelleAccessible: boolean,
    readonly nmPers: string,
    readonly noInternet: string,
    readonly znPrenPers: string
}
