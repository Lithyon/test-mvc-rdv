import MotifEntity from "./MotifEntity";

export default interface DisponibilitesRequestEntity {
    cdBuro: string;
    dtDebut: Date;
    motifs: MotifEntity[];
}