import {Alert, Button, Form} from "macif-components";
import RendezVousSelectionModelView from "../ModelView/RendezVous/RendezVousSelectionModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {TypeDomaine} from "../../../../Domain/Data/Enum/Domaine";
import Textarea from "../../../components/Textarea";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";
import DomaineModelView from "../ModelView/Domaine/DomaineModelView";
import DemandeModelView from "../ModelView/Demande/DemandeModelView";
import CanalModelView from "../ModelView/Canal/CanalModelView";
import JourSwitcher from "../JourSwitcher";
import HeureSwitcher from "../HeureSwitcher";
import {LoadingObservable} from "../../../commons/LoadingObservable";
import {ErrorObservable} from "../../../commons/ErrorObservable";
import RendezVousModelView from "../ModelView/RendezVous/RendezVousModelView";
import ChoixConnexionModelView from "../ModelView/ChoixConnexionModelView";
import PagesDetails from "../../PagesDetails";
import {useNavigate} from "react-router-dom";

export interface PriseRendezVousProps {
    readonly dataSource: RendezVousSelectionModelView;
    readonly onDomaineSelected: Function;
    readonly domaines: Array<DomaineModelView>;
    readonly onDemandeSelected: Function;
    readonly demandes: Array<DemandeModelView>;
    readonly onCanalSelected: Function;
    readonly canal: Array<CanalModelView>;
    readonly onPrecisionChanged: Function;
    readonly disponibilites: DisponibilitesModelView;
    readonly onJourSelected: Function;
    readonly loadDisponibilites: Function;
    readonly onHeureSelected: Function;
    readonly onLoadDisponibilitesObserver: LoadingObservable;
    readonly hasErrorDisponibilitesObserver: ErrorObservable;
    readonly stateLocation: RendezVousModelView;
    readonly onChoixConnexionSelected: Function;
    readonly choixConnexion: Array<ChoixConnexionModelView>;
}

export default function PriseRendezVous({
                                            dataSource,
                                            onDomaineSelected,
                                            domaines,
                                            onDemandeSelected,
                                            demandes,
                                            onCanalSelected,
                                            canal,
                                            onPrecisionChanged,
                                            disponibilites,
                                            onJourSelected,
                                            loadDisponibilites,
                                            onHeureSelected,
                                            onLoadDisponibilitesObserver,
                                            hasErrorDisponibilitesObserver,
                                            stateLocation,
                                            onChoixConnexionSelected,
                                            choixConnexion
                                        }: PriseRendezVousProps) {
    const navigate = useNavigate();

    return (
        <Form className="mcf-mt--5">
            <h2>Votre rendez-vous</h2>
            <p className="mcf-text--info mcf-mb--6 mcf-font-weight--bold">
                <i className="icon-macif-mobile-info-plein"></i>Sauf mention contraire, tous les champs sont requis.
            </p>
            <ChoiceSwitcher onChoiceSelected={onDomaineSelected}
                            choiceSelected={dataSource.domaineSelected}
                            dataSource={domaines}
                            id="domaine"
                            label="Votre rendez-vous concerne ?"/>
            <ChoiceSwitcher onChoiceSelected={onDemandeSelected}
                            choiceSelected={dataSource.demandeSelected}
                            dataSource={demandes}
                            id="demande"
                            label="Votre demande concerne ?"/>
            {dataSource.domaineSelected === TypeDomaine.PRO && <Alert variant="primary">
                <span className="icon icon-macif-mobile-info-plein mcf-icon--3 mcf-float--left"></span>
                <p>
                    Ce cas nécessite une prise en charge particulière. Aussi, nous vous invitons à remplir un nouveau
                    formulaire. Un chargé
                    de clientèle spécialisé se déplacera sur votre lieu de travail afin d’évaluer avec vous les
                    meilleures solutions d’assurance
                    pour votre activité.
                </p>
                <Button variant="light">Demander mon rendez-vous Pro</Button>
            </Alert>}
            <ChoiceSwitcher onChoiceSelected={onCanalSelected} show={dataSource.afficherChoixCanaux}
                            choiceSelected={dataSource.canalSelected}
                            dataSource={canal}
                            id="canal"
                            label="Vous souhaitez un rendez-vous"/>
            {dataSource.canalSelected &&
                <>
                    <Textarea label="Apportez une précision, si nécessaire :"
                              id="precision"
                              maxLength={234}
                              onChange={onPrecisionChanged}
                              value={dataSource.precision}/>
                    <JourSwitcher choiceSelected={dataSource.jour} onChoiceSelected={onJourSelected}
                                  dataSource={disponibilites} onClick={loadDisponibilites}
                                  onLoadDisponibilitesObserver={onLoadDisponibilitesObserver}
                                  hasErrorDisponibilitesObserver={hasErrorDisponibilitesObserver}/>
                    <HeureSwitcher onChoiceSelected={onHeureSelected} choiceSelected={dataSource.heure}
                                   dataSource={disponibilites.disponibilites} jourSelected={dataSource.jour}
                                   proposerChoixHoraire={dataSource.proposerChoixHoraire}
                                   onLoadDisponibilitesObserver={onLoadDisponibilitesObserver} canalSelected={dataSource.canalSelected}/>
                </>}
            {dataSource.afficherChoixConnexion && choixConnexion.length > 0 && <h3>Vos informations</h3>}
            <ChoiceSwitcher onChoiceSelected={onChoixConnexionSelected} show={dataSource.afficherChoixConnexion}
                            choiceSelected={dataSource.choixConnexionSelected}
                            dataSource={choixConnexion} nbSwitchers={2}
                            label="Pour confirmer votre rendez-vous, nous avons besoin de vous identifier. Avez-vous un espace client ?"
                            id="hasAccount"/>
            {dataSource.choixConnexionSelected !== "" && <div className="mcf-d--flex mcf-justify-content--between">
                <Button variant="outline--primary">Annuler</Button>
                <Button className="mcf-mr--3" onClick={() => navigate(PagesDetails.Auth.link, {state: stateLocation})}>Suivant</Button>
            </div>}
        </Form>
    );
}
