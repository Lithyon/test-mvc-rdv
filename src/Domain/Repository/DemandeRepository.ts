import Demande from "../Model/Demande/Demande";

export default interface DemandeRepository {
    getDemandes(domaineSelected: string): Promise<Array<Demande>>;
}
