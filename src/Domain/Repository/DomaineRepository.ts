import Domaine from "../Model/Domaine/Domaine";

export default interface DomaineRepository {
    getDomaines(): Promise<Array<Domaine>>;
}
