import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";

export default interface DonneesUtilisateurDAO {
    sauvegardeDonneesUtilisateur(state: RendezVousModelView): Promise<string>;
}
