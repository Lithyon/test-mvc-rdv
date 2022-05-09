import DemandeEntity from "./API/Entity/DemandeEntity";

export default interface DemandeDataSource {
    getDemandes(): Promise<DemandeEntity>;
}
