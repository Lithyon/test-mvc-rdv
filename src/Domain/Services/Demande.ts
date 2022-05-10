import Demande from "../Model/Demande/Demande";

export default interface DemandeService {
  getDemandes(domaineSelected: string): Promise<Demande>;
}

