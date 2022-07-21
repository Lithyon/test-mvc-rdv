import SituationFamilialeEntity from "../API/Entity/SituationFamilialeEntity";

export default interface SituationFamilialeDAO {
    getSituationFamiliale(): Promise<SituationFamilialeEntity>;
}
