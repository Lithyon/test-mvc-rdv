import Cloneable from "../Commun/Clonable";
import EquipementAccessibiliteState from "./EquipementAccessibiliteState";

export default class TypeEquipementAccessibiliteState implements Cloneable<TypeEquipementAccessibiliteState> {
    cdTyHandi: string;
    equipementAccessibilites: Array<EquipementAccessibiliteState>;
    liTyHandi: string;

    constructor(cdTyHandi: string, equipementAccessibilites: Array<EquipementAccessibiliteState>, liTyHandi: string) {
        this.cdTyHandi = cdTyHandi;
        this.equipementAccessibilites = equipementAccessibilites;
        this.liTyHandi = liTyHandi;
    }

    clone(): TypeEquipementAccessibiliteState {
        return new TypeEquipementAccessibiliteState(
            this.cdTyHandi,
            this.equipementAccessibilites,
            this.liTyHandi
        );
    }
}