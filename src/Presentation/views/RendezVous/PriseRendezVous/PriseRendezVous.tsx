import {Form} from "macif-components";
import Demande from "./Demande";
import Domaine from "./Domaine";
import DomaineModelView from "./Domaine/ModelView/DomaineModelView";
import DemandeModelView from "./Demande/ModelView/DemandeModelView";
import RendezVousSelectionModelView from "../ModelView/RendezVousSelectionModelView";

export interface PriseRendezVousProps {
    readonly dataSource: RendezVousSelectionModelView;
    readonly onDomaineSelected: Function;
    readonly domaines: Array<DomaineModelView>;
    readonly onDemandeSelected: Function;
    readonly demandes: Array<DemandeModelView>;
}

export default function PriseRendezVous({dataSource, onDomaineSelected, domaines, onDemandeSelected, demandes}: PriseRendezVousProps) {
    return (
        <Form className="mcf-mt--5">
            <Domaine
                onChoiceSelected={onDomaineSelected}
                choiceSelected={dataSource.domaineSelected}
                dataSource={domaines}
            />
            <Demande
                onChoiceSelected={onDemandeSelected}
                choiceSelected={dataSource.demandeSelected}
                dataSource={demandes}
            />
            <pre><code>{JSON.stringify(dataSource, null, 4)}</code></pre>
        </Form>
    );
}
