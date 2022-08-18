import {CiviliteModelView} from "../ModelView/Civilite/CiviliteModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {Button, Col, Form, Row} from "macif-components";
import Parrainage from "./Parrainage/Parrainage";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {DEMANDES_AVEC_PARRAINAGE} from "../../../../Domain/Data/Enum/Demande";
import FormErrorModelView from "../ModelView/FormError/FormErrorModelView";
import {CreationCompteModelView} from "../ModelView/CreationCompte/CreationCompteModelView";
import {BooleanChoiceModelView} from "../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import Input from "../../../components/Input";
import AutoCompleteField from "../../../components/AutoCompleteField/AutoCompleteField";
import React from "react";
import {CommuneModelView} from "../ModelView/Commune/CommuneModelView";
import DatePicker from "../../../components/DatePicker";
import {subYears} from "date-fns";
import {SituationFamilialeModelView} from "../ModelView/SituationFamiliale/SituationFamilialeModelView";
import SelectField from "../../../components/SelectField";
import {ProfessionModelView} from "../ModelView/Profession/ProfessionModelView";

export interface CreationCompteProps {
    readonly formError: FormErrorModelView;
    readonly dataSource: CreationCompteModelView;
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
}

export default function CreationCompteView({
                                               formError,
                                               dataSource,
                                               rendezVous,
                                               civilite,
                                               situationFamiliale,
                                               profession,
                                               parrainageChoix,
                                               informationsCommercialesEmail,
                                               informationsCommercialesSms,
                                               informationsCommercialesTelephone,
                                               communes,
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
                                               formHasError
                                           }: CreationCompteProps) {
    function handleCreationCompte() {
        onCreationCompte();
    }

    const hasError = formHasError();

    function labelCommune(commune: CommuneModelView) {
        if (commune.codePostal === "") {
            return "";
        } else {
            if (commune.lieuDit) {
                return `${commune.codePostal} ${commune.nomAcheminement} (${commune.nom})`;
            } else if (commune.ancienNom) {
                return `${commune.codePostal} ${commune.nom} (${commune.ancienNom})`;
            } else {
                return `${commune.codePostal || ""} ${commune.nom}`;
            }
        }
    }

    return <>
        <Form className="mcf-mt--5">
            <h1 id="vos-informations">Vos informations</h1>

            <p className="mcf-mb--6 mcf-ml--1">
                Sauf mention contraire, tous les champs sont requis.
            </p>

            <ChoiceSwitcher onChoiceSelected={onCiviliteSelected}
                            choiceSelected={dataSource.civilite}
                            dataSource={civilite}
                            label="Civilité"
                            id="civilite"
                            errorMessage={formError.civilite}
            />

            <Input id="nom"
                   label="Nom"
                   onChange={onChangeNom}
                   value={dataSource.nom}
                   autoComplete="family-name"
                   errorMessage={formError.nom}
            />

            <Input id="prenom"
                   label="Prénom"
                   onChange={onChangePrenom}
                   value={dataSource.prenom}
                   autoComplete="given-name"
                   errorMessage={formError.prenom}
            />

            <AutoCompleteField
                id="autocomplete-commune"
                label="Commune de résidence"
                placeholder="Ex : 75001, Paris"
                autoComplete="address-level2"
                labelFormat={labelCommune}
                onSearchChange={onRechercheCommune}
                dataSource={communes}
                onSelect={onCommuneSelected}
                errorMessage={formError.commune}
            />

            <Input id="numeroTelephone"
                   label="Numéro de téléphone"
                   type="tel"
                   onChange={onChangeNumeroTelephone}
                   value={dataSource.numeroTelephone}
                   message="Si besoin, un conseiller pourra vous contacter sur ce numéro à propos de votre rendez-vous."
                   maxLength={10}
                   autoComplete="tel"
                   errorMessage={formError.numeroTelephone}
            />

            <Input id="email"
                   label="E-mail"
                   type="email"
                   onChange={onChangeEmail}
                   value={dataSource.email}
                   message="Votre e-mail vous servira d'identifiant pour vous connecter à votre espace personnel sur macif.fr. Un mot de passe temporaire vous sera envoyé sur cet e-mail."
                   autoComplete="email"
                   errorMessage={formError.email}
            />

            <DatePicker
                id="dateDeNaissance"
                minDate={new Date(1900, 0, 1)}
                maxDate={subYears(new Date(), 18)}
                label="Date de naissance"
                md={2}
                xs={9}
                placeholder="JJ/MM/AAAA"
                onChangeDate={onChangeDateNaissance}
                errorMessage={formError.dateNaissance}
            />

            <SelectField
                id="situationFamiliale"
                label="Situation familiale"
                onChangeSelect={onChangeSituationFamiliale}
                dataSource={situationFamiliale}
                errorMessage={formError.situationFamiliale}
            />

            <SelectField
                id="profession"
                label="Profession"
                onChangeSelect={onChangeProfession}
                dataSource={profession}
                errorMessage={formError.profession}
            />

            {DEMANDES_AVEC_PARRAINAGE.includes(rendezVous.demandeSelected.code) &&
                <Parrainage dataSource={dataSource.parrainageChoix}
                            parrainageChoix={parrainageChoix}
                            noSocietaireParrain={rendezVous.noSocietaireParrain}
                            onParrainageChoixSelected={onParrainageChoixSelected}
                            onChangeParrainageNumeroSocietaire={onChangeParrainageNumeroSocietaire}
                            errorMessageNumeroSocietaire={formError.noSocietaireParrain}
                />
            }

            <Form.Label as="h2" className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">
                La Macif et des entités de son groupe (Aéma Groupe) peuvent être amenées à vous informer sur leurs produits, services et
                avantages pour être au plus proche de vos besoins et vous apporter des conseils personnalisés.
            </Form.Label>

            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesEmailSelected}
                            choiceSelected={dataSource.informationsCommercialesEmail}
                            dataSource={informationsCommercialesEmail}
                            label="J'accepte de recevoir ces informations commerciales par e-mail ?"
                            id="informationsCommercialesEmail"
                            errorMessage={formError.informationsCommercialesEmail}
            />
            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesSmsSelected}
                            choiceSelected={dataSource.informationsCommercialesSms}
                            dataSource={informationsCommercialesSms}
                            label="J'accepte de recevoir ces informations commerciales par SMS ?"
                            id="informationsCommercialesSms"
                            errorMessage={formError.informationsCommercialesSms}
            />
            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesTelephoneSelected}
                            choiceSelected={dataSource.informationsCommercialesTelephone}
                            dataSource={informationsCommercialesTelephone}
                            label="J'accepte de recevoir ces informations commerciales par message vocal ?"
                            id="informationsCommercialesTelephone"
                            errorMessage={formError.informationsCommercialesTelephone}
            />
            <Row className="mcf-justify-content--between">
                <Col className="mcf-pl--0 mcf-order-sm-1 mcf-mb--4" sm="6" md="3">
                    <Button block variant="primary" onClick={handleCreationCompte} disabled={hasError} data-track-analytics="Rdv_Informations_Confirmer">
                        Confirmer mon rendez-vous
                    </Button>
                </Col>
                <Col className="mcf-pl--0" sm="6" md="2">
                    <Button block href="/" variant="outline--primary" data-track-analytics="Rdv_Informations_Annuler">Annuler</Button>
                </Col>
            </Row>
        </Form>
    </>;
}
