import Demande from "../Model/Demande";

export interface DemandeRepository {
    getDemandes(domaineSelected: string): Promise<Demande>;
}
