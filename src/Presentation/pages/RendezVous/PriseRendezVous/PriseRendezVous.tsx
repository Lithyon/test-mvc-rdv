import {Alert, Button, Col, Form, Row} from "macif-components";
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
import ChoixConnexionModelView from "../ModelView/ChoixConnexion/ChoixConnexionModelView";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import DisplayError from "../../../components/DisplayError";
import LoadWaitingIsOver from "../../../commons/LoadingEvent/LoadWaitingIsOver";
import useLoaderObservable from "../../../hooks/useLoaderObservable";
import HeureDisponibleModelView from "../ModelView/Disponibilites/HeureDisponibleModelView";

export interface PriseRendezVousProps {
    readonly dataSource: RendezVousSelectionModelView;
    readonly onDomaineSelected: (value: DomaineModelView) => void;
    readonly domaines: Array<DomaineModelView>;
    readonly onDemandeSelected: (value: DemandeModelView) => void;
    readonly demandes: Array<DemandeModelView>;
    readonly onCanalSelected: (value: CanalModelView) => void;
    readonly canal: Array<CanalModelView>;
    readonly onPrecisionChanged: Function;
    readonly disponibilites: DisponibilitesModelView;
    readonly onJourSelected: (value: Date) => void;
    readonly loadDisponibilites: Function;
    readonly onHeureSelected: (value: HeureDisponibleModelView) => void;
    readonly onLoadDisponibilitesObserver: LoadingObservable;
    readonly hasErrorDisponibilitesObserver: ErrorObservable;
    readonly onChoixConnexionSelected: (value: ChoixConnexionModelView) => void;
    readonly choixConnexion: Array<ChoixConnexionModelView>;
    readonly onValidationFormulaire: Function;
    readonly estConnecte: boolean;
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
                                            onChoixConnexionSelected,
                                            choixConnexion,
                                            onValidationFormulaire,
                                            estConnecte
                                        }: PriseRendezVousProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const titreRendezVousRef = useRef<HTMLHeadingElement>(null);

    const {isOver}: LoadWaitingIsOver = useLoaderObservable(onLoadDisponibilitesObserver);

    useEffect(() => {
        if (titreRendezVousRef?.current && location.hash !== "") {
            titreRendezVousRef.current.scrollIntoView({behavior: "smooth"});
            titreRendezVousRef.current.focus();
            titreRendezVousRef.current.setAttribute("tabIndex", "-1");
        }
    }, [location, titreRendezVousRef]);

    return (
        <Form className="mcf-mt--5">
            <h1 id="titre-rendez-vous" ref={titreRendezVousRef}>Votre rendez-vous</h1>
            <p className="mcf-mb--6 mcf-ml--1">
                Sauf mention contraire, tous les champs sont requis.
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
            {dataSource.domaineSelected.code === TypeDomaine.PRO && <Alert variant="primary">
                <span className="icon icon-macif-mobile-info-plein mcf-icon--3 mcf-float--left"></span>
                <p>
                    Ce cas nécessite une prise en charge particulière. Aussi, nous vous invitons à remplir un nouveau
                    formulaire. Un chargé
                    de clientèle spécialisé se déplacera sur votre lieu de travail afin d’évaluer avec vous les
                    meilleures solutions d’assurance
                    pour votre activité.
                </p>
                <Button href="/assurance/professionnels-et-entreprises/demande-de-rendez-vous-pour-les-professionnels-et-les-entreprises"
                        variant="light">
                    Demander mon rendez-vous Pro
                </Button>
            </Alert>}
            <ChoiceSwitcher onChoiceSelected={onCanalSelected} show={dataSource.afficherChoixCanaux}
                            choiceSelected={dataSource.canalSelected}
                            dataSource={canal}
                            id="canal"
                            label="Vous souhaitez un rendez-vous"/>
            {dataSource.canalSelected.code !== "" &&
                <>
                    <Textarea label="Apportez une précision, si nécessaire :"
                              id="precision"
                              maxLength={234}
                              onChange={onPrecisionChanged}
                              value={dataSource.precision}/>
                    <JourSwitcher choiceSelected={dataSource.jour} onChoiceSelected={onJourSelected}
                                  dataSource={disponibilites} onClick={loadDisponibilites}
                                  isOver={!!isOver}
                                  hasErrorDisponibilitesObserver={hasErrorDisponibilitesObserver}/>
                    {!disponibilites.aucuneDisponibilite ?
                        <>
                            <HeureSwitcher onChoiceSelected={onHeureSelected} choiceSelected={dataSource.heure}
                                           dataSource={disponibilites.disponibilites} jourSelected={dataSource.jour}
                                           proposerChoixHoraire={dataSource.proposerChoixHoraire}
                                           isOver={!!isOver} canalSelected={dataSource.canalSelected}/>

                            {dataSource.afficherChoixConnexion && choixConnexion.length > 0 &&
                                <>
                                    {!estConnecte &&
                                        <>
                                            <h3>Vos informations</h3>
                                            <ChoiceSwitcher onChoiceSelected={onChoixConnexionSelected} show={dataSource.afficherChoixConnexion}
                                                            choiceSelected={dataSource.choixConnexionSelected}
                                                            dataSource={choixConnexion} nbSwitchers={2}
                                                            label="Pour confirmer votre rendez-vous, nous avons besoin de vous identifier. Avez-vous un espace client ?"
                                                            id="hasAccount"/>

                                        </>
                                    }
                                    {dataSource.choixConnexionSelected.code !== "" &&
                                        <Row className="mcf-justify-content--between">
                                            <Col className="mcf-pl--0 mcf-order-sm-1 mcf-mb--4" sm="6" md="2">
                                                <Button block onClick={() => onValidationFormulaire(navigate)}>Suivant</Button>
                                            </Col>
                                            <Col className="mcf-pl--0" sm="6" md="2">
                                                <Button block href="/" data-track-analytics="Rdv_Informations_Annuler"
                                                        variant="outline--primary">Annuler</Button>
                                            </Col>
                                        </Row>
                                    }
                                </>
                            }
                        </>
                        : isOver &&
                        <DisplayError>
                            <>Aucune disponibilité pour un rendez-vous {dataSource.canalSelected.libelle.toLowerCase()} sur cette période.
                                {" "}Veuillez essayer une autre période ou utiliser un autre type de rendez-vous
                            </>
                        </DisplayError>
                    }
                </>
            }
        </Form>
    );
}
