import { RendezVousRequestEntity, RendezVousResponseEntity } from "./API/Entity/RendezVousAPIEntity";

export default interface RendezVousDataSource {
  creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousResponseEntity>;
}
