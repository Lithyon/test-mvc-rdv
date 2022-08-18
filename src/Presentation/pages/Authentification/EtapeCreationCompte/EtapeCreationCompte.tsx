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
import {CanalCode} from "../../../../Domain/Data/Enum/Canal";
import TitreModaleConfirmation from "../TitreModaleConfirmation";
import CorpsModaleConfirmation from "../CorpsModaleConfirmation";

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
    readonly onAfficherModaleModificationEmail: Function;
    readonly afficherModalModificationEmail: boolean;
    readonly afficherModaleConfirmation: boolean;
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
                                                redirectionMireDeConnexion,
                                                onAfficherModaleModificationEmail,
                                                afficherModalModificationEmail,
                                                afficherModaleConfirmation
                                            }: EtapeCreationCompteProps) {
    const {hasError}: ErrorIsTriggered = useErrorObservable(hasErrorDejaUnCompteObserver);

    function emailAnonymise() {
        return creationCompte.email.replace(
            /(\w{3})[\w.-]+@([\w.]+\w)/,
            "$1***@$2"
        )
    }

    function handleCreationCompte() {
        if (rendezVous.canalSelected.code === CanalCode.VISIO) {
            onAfficherModaleModificationEmail(true);
        } else {
            onCreationCompte();
        }
    }

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
            onCreationCompte={handleCreationCompte}
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

        <Modal
            show={afficherModalModificationEmail}
            centered
            backdrop="static"
        >
            <Modal.Body>
                <>
                    <span className="icon icon-macif-mobile-enveloppe icon-title"/>
                    <Modal.Title className="mcf-text--big-3 mcf-font--bold">Confirmer votre rendez-vous ?</Modal.Title>
                    <ul className="mcf-pr--7">
                        <li>Vous recevrez par e-mail {emailAnonymise()} les informations et le lien du rendez-vous en visioconférence.</li>
                        <li>
                            Votre espace client sera créé pour gérer votre rendez-vous (un mot de passe temporaire sera envoyé par e-mail)
                        </li>
                    </ul>
                </>
            </Modal.Body>

            <Modal.Footer className="mcf-justify-content--around">
                <Button
                    variant="outline--primary"
                    onClick={() => onAfficherModaleModificationEmail(false)}>
                    Modifier mon e-mail
                </Button>

                <Button
                    variant="primary"
                    onClick={() => onCreationCompte()}>
                    Confirmer
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={afficherModaleConfirmation}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton/>

            <Modal.Body>
                <>
                    <span className={`icon icon-macif-mobile-cercle-check mcf-text--success icon-title`}/>
                    <Modal.Title><TitreModaleConfirmation canalSelected={rendezVous.canalSelected}/></Modal.Title>
                    <CorpsModaleConfirmation canalSelected={rendezVous.canalSelected}/>
                </>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    href="/assurance/particuliers/vos-espaces-macif/espace-assurance">
                    Accéder à mon espace client
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}
