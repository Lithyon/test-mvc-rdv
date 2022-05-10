import Cloneable from "./Clonable";

export default class EquipementAccessibiliteState implements Cloneable<EquipementAccessibiliteState> {
    cdEqpHandi: string;
    liEqpHandi: string;

    constructor(cdEqpHandi: string, liEqpHandi: string) {
        this.cdEqpHandi = cdEqpHandi;
        this.liEqpHandi = liEqpHandi;
    }

    clone(): EquipementAccessibiliteState {
        return new EquipementAccessibiliteState(
            this.cdEqpHandi,
            this.liEqpHandi
        );
    }
}