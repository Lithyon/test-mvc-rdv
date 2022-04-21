import { RendezVousRequestEntity, RendezVousResponseEntity } from "../Repository/Data/API/Entity/RendezVousAPIEntity";

export interface RendezVousEtat extends RendezVousRequestEntity {}

export default class RendezVous {
  constructor(readonly etat: RendezVousEtat) {}
}

export interface RendezVousResponseEtat extends RendezVousResponseEntity {}

export class RendezVousResponse {
  constructor(readonly etat: RendezVousResponseEtat) {}
}