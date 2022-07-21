import ProfessionServiceImpl from "./ProfessionServiceImpl";
import ProfessionRepository from "../../Repository/Profession";

export {ProfessionServiceImpl};

export default new ProfessionServiceImpl(ProfessionRepository);
