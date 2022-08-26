import DomaineServiceImpl from "./DomaineServiceImpl";
import DomaineRepository from "../../Repository/Domaine";

export {DomaineServiceImpl};

export default new DomaineServiceImpl(DomaineRepository);
