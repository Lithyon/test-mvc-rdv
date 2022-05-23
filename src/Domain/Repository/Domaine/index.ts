import {DomaineRepositoryImpl} from "./DomaineRepositoryImpl";
import DomaineDAO from "../../Data/Domaine";

export {DomaineRepositoryImpl};

export default new DomaineRepositoryImpl(DomaineDAO);