import MotifState from "./MotifState";

export default interface DisponibilitesRequestState {
    cdBuro: string;
    dtDebut: Date;
    motifs: Array<MotifState>;
}