import DemandeEntity from "../API/Entity/DemandeEntity";

export default interface DemandeDAO {
    getDemandes(): Promise<DemandeEntity>;
}
