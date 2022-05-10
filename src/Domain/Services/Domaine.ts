import Domaine from "../Model/Domaine";

export default interface DomaineService {
    getDomaines(domaineSelected: string): Promise<Domaine>;
}
