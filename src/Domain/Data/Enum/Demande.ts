export const TypeDemande = {
    AUTRE: "99",
    DEVIS: "01",
    SOUSCRIPTION: "02",
    MODIFICATION_CONTRAT: "03",
    SINISTRE: "04",
}

export const DEMANDES_HORS_SINISTRE = [
    TypeDemande.AUTRE,
    TypeDemande.DEVIS,
    TypeDemande.SOUSCRIPTION,
    TypeDemande.MODIFICATION_CONTRAT,
];

export const DEMANDES_DEFAULT = [
    ...DEMANDES_HORS_SINISTRE,
    TypeDemande.SINISTRE,
];
