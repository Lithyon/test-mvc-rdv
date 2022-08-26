import {IdentiteRepositoryImpl} from "../../Repository/Identite";
import {setCookie} from "../../Data/API/Commons/Cookie";
import {CookieKeysEnum} from "../../Data/Enum/CookieKeysEnum";
import {addMinutes} from "date-fns";
import IdentiteEntity from "../../Data/API/Entity/IdentiteEntity";

export default class IdentiteServiceImpl {
    private readonly identiteRepo: IdentiteRepositoryImpl;

    constructor(_identiteRepo: IdentiteRepositoryImpl) {
        this.identiteRepo = _identiteRepo;
    }

    async getIdentite() {
        const data = await this.identiteRepo.getIdentite();
        this.createCookies(data);
    }

    createCookies(identite: IdentiteEntity) {
        const expires = addMinutes(new Date(), 30);

        if (identite.inConnueMacif) {
            setCookie(CookieKeysEnum.NO_PERS, identite.identiteMacif.noPers.toString(), {
                path: "/",
                expires
            });
            setCookie(CookieKeysEnum.CD_CENT, identite.identiteMacif.cdCent, {
                path: "/",
                expires
            });
            setCookie(CookieKeysEnum.CD_REGION, identite.identiteMacif.cdRegio, {
                path: "/",
                expires
            });
            setCookie(CookieKeysEnum.PROFIL, identite.identiteMacif.cdProfilAcces, {
                path: "/",
                expires
            });
            setCookie(CookieKeysEnum.NO_DEP_ADRESSE, identite.identiteMacif.noDeptAdresseStat, {
                path: "/",
                expires
            });
        }

        if (identite.inSISanteIndividuelleAccessible) {
            setCookie(CookieKeysEnum.CODE_LOCALISATION_SANTE, identite.identiteSanteIndividuelle.codeLocalisation, {
                path: "/",
                expires
            });
        }
    }
}
