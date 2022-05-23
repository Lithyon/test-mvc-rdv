import {Alert, Button, Form} from "macif-components";
import RendezVousSelectionModelView from "../ModelView/RendezVous/RendezVousSelectionModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {TypeDomaine} from "../../../../Domain/Data/Enum/Domaine";
import Textarea from "../../../components/Textarea";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";
import DomaineModelView from "../ModelView/Domaine/DomaineModelView";
import DemandeModelView from "../ModelView/Demande/DemandeModelView";
import CanalModelView from "../ModelView/CanalModelView";
import JourSwitcher from "../JourSwitcher";
import HeureSwitcher from "../HeureSwitcher";
import {LoadingObservable} from "../../../commons/LoadingObservable";

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
                                            onLoadDisponibilitesObserver
                                        }: PriseRendezVousProps) {
    return (
        <Form className="mcf-mt--5">
            <h3>Votre rendez-vous</h3>
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
            <ChoiceSwitcher onChoiceSelected={onCanalSelected}
                            choiceSelected={dataSource.canalSelected}
                            dataSource={canal}
                            id="canal"
                            label="Vous souhaitez un rendez-vous"
                            labelInfo="Si vous choisissez par téléphone, un conseiller vous rappellera pour fixer un rendez-vous."/>
            {dataSource.canalSelected &&
                <>
                    <Textarea label="Apporter une précision, si nécessaire :"
                              id="precision"
                              maxLenght={234}
                              onChange={onPrecisionChanged}
                              value={dataSource.precision}/>
                    <JourSwitcher choiceSelected={dataSource.jour} onChoiceSelected={onJourSelected}
                                  dataSource={disponibilites} onClick={loadDisponibilites}
                                  onLoadDisponibilitesObserver={onLoadDisponibilitesObserver}/>
                    <HeureSwitcher onChoiceSelected={onHeureSelected} choiceSelected={dataSource.heure}
                                   dataSource={disponibilites.disponibilites} jourSelected={dataSource.jour}
                                   proposerChoixHoraire={dataSource.proposerChoixHoraire}
                                   onLoadDisponibilitesObserver={onLoadDisponibilitesObserver}/>
                </>}
            <pre><code>{JSON.stringify(dataSource, null, 4)}</code></pre>
        </Form>
    );
}
