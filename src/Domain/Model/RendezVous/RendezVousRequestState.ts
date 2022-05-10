import Cloneable from "../Commun/Clonable";

export class RendezVousRequestState implements Cloneable<RendezVousRequestState> {
    cdBuro: string;
    cdDemande: string;
    cdDomaine: string;
    estFilleul: boolean;
    heure: number;
    jour: Date;
    nmCommu: string;
    noSocietaireParrain: string;
    noTel: string;
    precision: string;

    constructor(
        cdBuro: string,
        cdDemande: string,
        cdDomaine: string,
        estFilleul: boolean,
        heure: number,
        jour: Date,
        nmCommu: string,
        noSocietaireParrain: string,
        noTel: string,
        precision: string
    ) {
        this.cdBuro = cdBuro;
        this.cdDemande = cdDemande;
        this.cdDomaine = cdDomaine;
        this.estFilleul = estFilleul;
        this.heure = heure;
        this.jour = jour;
        this.nmCommu = nmCommu;
        this.noSocietaireParrain = noSocietaireParrain;
        this.noTel = noTel;
        this.precision = precision;
    }

    clone(): RendezVousRequestState {
        return new RendezVousRequestState(
            this.cdBuro,
            this.cdDemande,
            this.cdDomaine,
            this.estFilleul,
            this.heure,
            this.jour,
            this.nmCommu,
            this.noSocietaireParrain,
            this.noTel,
            this.precision
        );
    }
}