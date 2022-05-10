import Domaine from "../Model/Domaine/Domaine";

export default interface DomaineService {
    getDomaines(domaineSelected: string): Promise<Domaine>;
}
