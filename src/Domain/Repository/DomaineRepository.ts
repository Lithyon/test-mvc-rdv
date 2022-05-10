import Domaine from "../Model/Domaine";

export default interface DomaineRepository {
    getDomaines(): Promise<Domaine>;
}
