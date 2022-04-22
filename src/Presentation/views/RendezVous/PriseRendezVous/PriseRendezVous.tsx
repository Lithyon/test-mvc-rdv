import {Form} from "macif-components";
import RendezVousSelectionModelView from "../ModelView/RendezVousSelectionModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import CodificationModelView from "../../../commons/Codification/CodificationModelView";

export interface PriseRendezVousProps {
    readonly dataSource: RendezVousSelectionModelView;
    readonly onDomaineSelected: Function;
    readonly domaines: Array<CodificationModelView>;
    readonly onDemandeSelected: Function;
    readonly demandes: Array<CodificationModelView>;
}

export default function PriseRendezVous({dataSource, onDomaineSelected, domaines, onDemandeSelected, demandes}: PriseRendezVousProps) {
    return (
        <Form className="mcf-mt--5">
            <ChoiceSwitcher onChoiceSelected={onDomaineSelected}
                            choiceSelected={dataSource.domaineSelected}
                            dataSource={domaines}
                            label="Votre rendez-vous concerne ?"/>
            <ChoiceSwitcher onChoiceSelected={onDemandeSelected}
                            choiceSelected={dataSource.demandeSelected}
                            dataSource={demandes}
                            label="Votre demande concerne ?"/>
            <pre><code>{JSON.stringify(dataSource, null, 4)}</code></pre>
        </Form>
    );
}
