import Demande from "../Model/Demande";

export default interface DemandeRepository {
    getDemandes(domaineSelected: string): Promise<Demande>;
}
