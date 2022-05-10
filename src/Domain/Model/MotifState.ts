import Cloneable from "./Clonable";

export default class MotifState implements Cloneable<MotifState> {
    cdDemande: string;
    cdDomaine: string;

    constructor(cdDemande: string, cdDomaine: string) {
        this.cdDemande = cdDemande;
        this.cdDomaine = cdDomaine;
    }

    clone(): MotifState {
        return new MotifState(this.cdDemande, this.cdDomaine);
    }
}