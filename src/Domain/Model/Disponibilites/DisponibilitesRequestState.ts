import MotifState from "./MotifState";
import Cloneable from "../Commun/Clonable";

export default class DisponibilitesRequestState implements Cloneable<DisponibilitesRequestState> {
    cdBuro: string;
    dtDebut: Date;
    motifs: Array<MotifState>;

    constructor(cdBuro: string, dtDebut: Date, motifs: Array<MotifState>) {
        this.cdBuro = cdBuro;
        this.dtDebut = dtDebut;
        this.motifs = motifs;
    }

    clone(): DisponibilitesRequestState {
        return new DisponibilitesRequestState(
            this.cdBuro,
            this.dtDebut,
            this.motifs
        );
    }
}