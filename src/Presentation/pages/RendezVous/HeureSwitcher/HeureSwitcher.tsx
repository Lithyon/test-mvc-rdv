import JourDisponibleModelView from "../ModelView/Disponibilites/JourDisponibleModelView";
import {Alert, Card, Form} from "macif-components";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import LoadWaitingIsOver from "../../../commons/LoadingEvent/LoadWaitingIsOver";
import useLoaderObservable from "../../../hooks/useLoaderObservable";
import {LoadingObservable} from "../../../commons/LoadingObservable";

export interface HeureSwitcherProps {
    readonly onChoiceSelected: Function;
    readonly choiceSelected: number;
    readonly jourSelected: Date;
    readonly dataSource: Array<JourDisponibleModelView>;
    readonly proposerChoixHoraire: boolean;
    readonly onLoadDisponibilitesObserver: LoadingObservable
}

export default function HeureSwitcher({
                                          onChoiceSelected,
                                          choiceSelected,
                                          dataSource,
                                          jourSelected,
                                          proposerChoixHoraire,
                                          onLoadDisponibilitesObserver
                                      }: HeureSwitcherProps) {
    const disponibilitesMatin = dataSource.find(item => item.jour === jourSelected)?.disponibilitesMatin || [];
    const disponibilitesApresMidi = dataSource.find(item => item.jour === jourSelected)?.disponibilitesApresMidi || [];

    const {isOver}: LoadWaitingIsOver = useLoaderObservable(onLoadDisponibilitesObserver);

    return proposerChoixHoraire && isOver ? (<Card body bg="gris-lune">
        <Form as={'div'}>
            <Form.Group>
                <Form.Label>Puis votre horaire</Form.Label>
                <Form.Text muted>La liste n'affiche que les horaires disponibles pour ce jour et dans cette
                    agence. Nos rendez-vous durent en moyenne 30 minutes.</Form.Text>
            </Form.Group>
            <ChoiceSwitcher onChoiceSelected={onChoiceSelected}
                            choiceSelected={choiceSelected}
                            dataSource={disponibilitesMatin}
                            id="heureMatin"
                            label="Matin"
                            nbSwitchers={6}/>
            {disponibilitesMatin.length === 0 && (
                <Form.Group>
                    <Form.Label>Matin</Form.Label>
                    <Form.Text>Il n'y a plus de rendez-vous disponible pour le matin</Form.Text>
                </Form.Group>
            )}
            <ChoiceSwitcher onChoiceSelected={onChoiceSelected}
                            choiceSelected={choiceSelected}
                            dataSource={disponibilitesApresMidi}
                            id="heureApresMidi"
                            label="Après Midi"
                            nbSwitchers={6}/>
            {disponibilitesApresMidi.length === 0 && (
                <Form.Group>
                    <Form.Label>Après Midi</Form.Label>
                    <Form.Text>Il n'y a plus de rendez-vous disponible pour l'après-midi</Form.Text>
                </Form.Group>
            )}
        </Form>
    </Card>) : <></>;
}