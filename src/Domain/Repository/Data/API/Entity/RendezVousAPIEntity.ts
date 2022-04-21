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
