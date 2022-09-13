import JourDisponibleModelView from "../ModelView/Disponibilites/JourDisponibleModelView";
import {Card, Form} from "macif-components";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {CanalCode} from "../../../../Domain/Data/Enum/Canal";
import HeureDisponibleModelView from "../ModelView/Disponibilites/HeureDisponibleModelView";
import CanalModelView from "../ModelView/Canal/CanalModelView";

export interface HeureSwitcherProps {
    readonly onChoiceSelected: (value: HeureDisponibleModelView) => void;
    readonly choiceSelected: HeureDisponibleModelView;
    readonly jourSelected: Date;
    readonly dataSource: Array<JourDisponibleModelView>;
    readonly proposerChoixHoraire: boolean;
    readonly isOver: boolean;
    readonly canalSelected: CanalModelView;
}

export default function HeureSwitcher({
                                          onChoiceSelected,
                                          choiceSelected,
                                          dataSource,
                                          jourSelected,
                                          proposerChoixHoraire,
                                          isOver,
                                          canalSelected
                                      }: HeureSwitcherProps) {
    const disponibilitesMatin = dataSource.find(item => item.jour === jourSelected)?.disponibilitesMatin || [];
    const disponibilitesApresMidi = dataSource.find(item => item.jour === jourSelected)?.disponibilitesApresMidi || [];

    const dureeRendezVous: string = canalSelected.code === CanalCode.TELEPHONE ? "15" : "30";

    return proposerChoixHoraire && isOver ? (<Card as={Form.Group} bg="gris-lune">
        <Card.Body>
            <Form as={"div"}>
                <Form.Group>
                    <Form.Label as="h3" className="mcf-text--small-1">Puis votre horaire</Form.Label>
                    <Form.Text className="mcf-text--small-1" muted>La liste n'affiche que les horaires disponibles pour ce jour et dans
                        cette
                        agence. Nos rendez-vous durent en moyenne {dureeRendezVous} minutes.</Form.Text>
                </Form.Group>
                <ChoiceSwitcher onChoiceSelected={onChoiceSelected}
                                choiceSelected={choiceSelected}
                                dataSource={disponibilitesMatin}
                                id="heureMatin"
                                label="Matin"
                                nbSwitchers={6}/>
                {disponibilitesMatin.length === 0 && (
                    <Form.Group>
                        <Form.Label as="h4" className="mcf-text--small-1">Matin</Form.Label>
                        <Form.Text className="mcf-text--small-1">Il n'y a plus de rendez-vous disponible pour le matin</Form.Text>
                    </Form.Group>
                )}
                <ChoiceSwitcher onChoiceSelected={onChoiceSelected}
                                choiceSelected={choiceSelected}
                                dataSource={disponibilitesApresMidi}
                                id="heureApresMidi"
                                label="Après-midi"
                                nbSwitchers={6}/>
                {disponibilitesApresMidi.length === 0 && (
                    <Form.Group>
                        <Form.Label as="h3" className="mcf-text--small-1">Après-midi</Form.Label>
                        <Form.Text className="mcf-text--small-1">Il n'y a plus de rendez-vous disponible pour l'après-midi</Form.Text>
                    </Form.Group>
                )}
            </Form>
        </Card.Body>
    </Card>) : <></>;
}
