import {SituationFamilialeRepositoryImpl} from "./SituationFamilialeRepositoryImpl";
import SituationFamilialeDAO from "../../Data/SituationFamiliale";

export {SituationFamilialeRepositoryImpl};

export default new SituationFamilialeRepositoryImpl(SituationFamilialeDAO);
