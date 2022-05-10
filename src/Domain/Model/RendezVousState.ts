import Cloneable from "./Clonable";

export default class RendezVousState implements Cloneable<RendezVousState> {
    listeRejets: Array<String>

    constructor(
        listeRejets: Array<String>
    ) {
        this.listeRejets = listeRejets;
    }

    clone(): RendezVousState {
        return new RendezVousState(
            this.listeRejets
        );
    }
}