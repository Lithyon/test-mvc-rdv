import Demande from "../Model/Demande";

export default interface DemandeService {
  getDemandes(domaineSelected: string): Promise<Demande>;
}

