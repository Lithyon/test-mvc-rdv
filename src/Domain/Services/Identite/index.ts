import IdentiteServiceImpl from "./IdentiteServiceImpl";
import IdentiteRepository from "../../Repository/Identite";

export {IdentiteServiceImpl};
export default new IdentiteServiceImpl(IdentiteRepository);
