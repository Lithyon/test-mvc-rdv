export interface RendezVousRequestEntity {
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
}

export interface RendezVousResponseEntity {
  listeRejets: Array<String>
}

export interface RendezVousDisponibilitesRequestEntity {
  cdBuro:  string;
  dtDebut: Date;
  motifs:  Motif[];
}

export interface Motif {
  cdDemande: string;
  cdDomaine: string;
}

export interface RendezVousDisponibilitesResponseEntity {
  aucuneDisponibilite: boolean;
  disponibilites:      Disponibilite[];
}

export interface Disponibilite {
  disponibilitesApresMidi: Disponibilites[];
  disponibilitesMatin:     Disponibilites[];
  ferie:                   boolean;
  jour:                    Date;
}

export interface Disponibilites {
  libelle: string;
  valeur:  number;
}

export interface Message {
  code:    string;
  libelle: string;
  niveau:  number;
}
