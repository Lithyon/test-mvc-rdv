import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";

export default interface AuthentificationDAO {
    initialiseConnexion(urlRedirection: string, uuid: string): Promise<AuthentificationEntity>;
    sauvegardeDonneesUtilisateur(state: RendezVousModelView): Promise<string>;
}
