import {CiviliteCode} from "../src/Domain/Data/Enum/DefaultCivilite";
import {ParrainageCode} from "../src/Domain/Data/Enum/Parrainage";
import {InformationCommercialeCode} from "../src/Domain/Data/Enum/InformationsCommerciales";

const creationCompteStub: CreateCompteEntity = {
    civilite: { code: CiviliteCode.MONSIEUR, libelle: 'Monsieur' },
    parrainageChoix: { code: ParrainageCode.OUI, libelle: 'Oui' },
    parrainageNumeroSocietaire: { numeroSocietaire: '123456789123456' },
    informationsCommercialesEmail: { code: InformationCommercialeCode.OUI, libelle: 'Oui' },
    informationsCommercialesSms: { code:InformationCommercialeCode.OUI , libelle: 'Oui' },
    informationsCommercialesTelephone: { code: InformationCommercialeCode.OUI, libelle: 'Oui' }
}

export {creationCompteStub};