import InformationsCommercialesRepositoryImpl from "./InformationsCommercialesRepositoryImpl";
import {DefaultInformationsCommerciales} from "../../Data/Enum/InformationsCommerciales";

export {InformationsCommercialesRepositoryImpl}

export default new InformationsCommercialesRepositoryImpl({
    defaultInformationsCommerciales: DefaultInformationsCommerciales
});