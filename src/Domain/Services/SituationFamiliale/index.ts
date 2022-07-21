import SituationFamilialeServiceImpl from "./SituationFamilialeServiceImpl";
import SituationFamilialeRepository from "../../Repository/SituationFamiliale";

export {SituationFamilialeServiceImpl};

export default new SituationFamilialeServiceImpl(SituationFamilialeRepository);
