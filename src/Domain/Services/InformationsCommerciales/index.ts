import InformationsCommercialesServiceImpl from "./InformationsCommercialesServiceImpl";
import InformationsCommercialesRepository from "../../Repository/InformationsCommerciales";

export {InformationsCommercialesServiceImpl};

export default new InformationsCommercialesServiceImpl(InformationsCommercialesRepository)