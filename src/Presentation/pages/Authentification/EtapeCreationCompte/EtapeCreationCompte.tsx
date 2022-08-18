import BandeauModification from "../BandeauModification/BandeauModification";
import CreationCompte from "../CreationCompte";
import React from "react";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import FormErrorModelView from "../ModelView/FormError/FormErrorModelView";
import {CreationCompteModelView} from "../ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "../ModelView/Civilite/CiviliteModelView";
import {BooleanChoiceModelView} from "../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {CommuneModelView} from "../ModelView/Commune/CommuneModelView";
import {SituationFamilialeModelView} from "../ModelView/SituationFamiliale/SituationFamilialeModelView";
import {ProfessionModelView} from "../ModelView/Profession/ProfessionModelView";
import ErrorIsTriggered from "../../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../../hooks/useErrorObservable";
import {Button, Modal} from "macif-components";
import {ErrorObservable} from "../../../commons/ErrorObservable";

export interface EtapeCreationCompteProps {
    readonly formError: FormErrorModelView;
    readonly creationCompte: CreationCompteModelView;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly civilite: Array<CiviliteModelView>;
    readonly parrainageChoix: Array<BooleanChoiceModelView>;
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>;
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>;
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>;
    readonly communes: Array<CommuneModelView>;
    readonly situationFamiliale: Array<SituationFamilialeModelView>;
    readonly profession: Array<ProfessionModelView>;
    readonly onCiviliteSelected: (value: CiviliteModelView) => void;
    readonly onChangeNom: Function;
    readonly onChangePrenom: Function;
    readonly onChangeNumeroTelephone: Function;
    readonly onChangeEmail: Function;
    readonly onParrainageChoixSelected: (value: BooleanChoiceModelView) => void;
    readonly onCommuneSelected: Function;
    readonly onRechercheCommune: Function;
    readonly onChangeParrainageNumeroSocietaire: Function;
    readonly onChangeDateNaissance: Function;
    readonly onChangeProfession: Function;
    readonly onChangeSituationFamiliale: Function;
    readonly onInformationsCommercialesEmailSelected: (value: BooleanChoiceModelView) => void;
    readonly onInformationsCommercialesSmsSelected: (value: BooleanChoiceModelView) => void;
    readonly onInformationsCommercialesTelephoneSelected: (value: BooleanChoiceModelView) => void;
    readonly onCreationCompte: Function;
    readonly formHasError: Function;
    readonly hasErrorDejaUnCompteObserver: ErrorObservable;
    readonly redirectionMireDeConnexion: Function;
}

export default function EtapeCreationCompte({
                                                rendezVous,
                                                creationCompte,
                                                formError,
                                                civilite,
                                                parrainageChoix,
                                                communes,
                                                situationFamiliale,
                                                profession,
                                                informationsCommercialesEmail,
                                                informationsCommercialesSms,
                                                informationsCommercialesTelephone,
                                                onCiviliteSelected,
                                                onChangeNom,
                                                onChangePrenom,
                                                onChangeNumeroTelephone,
                                                onChangeEmail,
                                                onParrainageChoixSelected,
                                                onCommuneSelected,
                                                onRechercheCommune,
                                                onChangeParrainageNumeroSocietaire,
                                                onChangeDateNaissance,
                                                onChangeSituationFamiliale,
                                                onChangeProfession,
                                                onInformationsCommercialesEmailSelected,
                                                onInformationsCommercialesSmsSelected,
                                                onInformationsCommercialesTelephoneSelected,
                                                onCreationCompte,
                                                formHasError,
                                                hasErrorDejaUnCompteObserver,
                                                redirectionMireDeConnexion
                                            }: EtapeCreationCompteProps) {
    const {hasError}: ErrorIsTriggered = useErrorObservable(hasErrorDejaUnCompteObserver);

    return <>
        <BandeauModification dataSource={rendezVous}/>
        <CreationCompte
            formError={formError}
            dataSource={creationCompte}
            rendezVous={rendezVous}
            civilite={civilite}
            parrainageChoix={parrainageChoix}
            communes={communes}
            situationFamiliale={situationFamiliale}
            profession={profession}
            informationsCommercialesEmail={informationsCommercialesEmail}
            informationsCommercialesSms={informationsCommercialesSms}
            informationsCommercialesTelephone={informationsCommercialesTelephone}
            onCiviliteSelected={onCiviliteSelected}
            onChangeNom={onChangeNom}
            onChangePrenom={onChangePrenom}
            onChangeNumeroTelephone={onChangeNumeroTelephone}
            onChangeEmail={onChangeEmail}
            onParrainageChoixSelected={onParrainageChoixSelected}
            onCommuneSelected={onCommuneSelected}
            onRechercheCommune={onRechercheCommune}
            onChangeParrainageNumeroSocietaire={onChangeParrainageNumeroSocietaire}
            onChangeDateNaissance={onChangeDateNaissance}
            onChangeSituationFamiliale={onChangeSituationFamiliale}
            onChangeProfession={onChangeProfession}
            onInformationsCommercialesEmailSelected={onInformationsCommercialesEmailSelected}
            onInformationsCommercialesSmsSelected={onInformationsCommercialesSmsSelected}
            onInformationsCommercialesTelephoneSelected={onInformationsCommercialesTelephoneSelected}
            onCreationCompte={onCreationCompte}
            formHasError={formHasError}
        />
        <Modal
            show={hasError}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton/>

            <Modal.Body>
                <>
                    <span className="icon icon-bonhomme-sourire icon-title"/>
                    <Modal.Title className="mcf-text--big-3 mcf-font--bold">Un compte existe déjà avec cet identifiant</Modal.Title>
                    <p>
                        Veuillez vous connecter ou choisir un autre email
                        pour créer un nouveau compte
                    </p>
                </>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={() => redirectionMireDeConnexion()}>
                    Connexion
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}
