import {CiviliteModelView} from "../ModelView/Civilite/CiviliteModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {Button, Form} from "macif-components";
import Parrainage from "./Parrainage/Parrainage";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {DEMANDES_AVEC_PARRAINAGE} from "../../../../Domain/Data/Enum/Demande";
import FormErrorModelView from "../ModelView/FormError/FormErrorModelView";
import {CreationCompteModelView} from "../ModelView/CreationCompte/CreationCompteModelView";
import {BooleanChoiceModelView} from "../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import Input from "../../../components/Input";

export interface CreationCompteProps {
    readonly formError: FormErrorModelView;
    readonly dataSource: CreationCompteModelView;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly civilite: Array<CiviliteModelView>;
    readonly parrainageChoix: Array<BooleanChoiceModelView>;
    readonly onCiviliteSelected: Function;
    readonly onChangeNom: Function;
    readonly onChangePrenom: Function;
    readonly onChangeNumeroTelephone: Function;
    readonly onChangeEmail: Function;
    readonly onParrainageChoixSelected: Function;
    readonly onChangeParrainageNumeroSocietaire: Function;
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>;
    readonly onInformationsCommercialesEmailSelected: Function;
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>;
    readonly onInformationsCommercialesSmsSelected: Function;
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>;
    readonly onInformationsCommercialesTelephoneSelected: Function;
    readonly onCreationCompte: Function;
    readonly formHasError: Function;
}

export default function CreationCompteView({
                                               formError,
                                               dataSource,
                                               rendezVous,
                                               civilite,
                                               parrainageChoix,
                                               onCiviliteSelected,
                                               onChangeNom,
                                               onChangePrenom,
                                               onChangeNumeroTelephone,
                                               onChangeEmail,
                                               onParrainageChoixSelected,
                                               onChangeParrainageNumeroSocietaire,
                                               informationsCommercialesEmail,
                                               onInformationsCommercialesEmailSelected,
                                               informationsCommercialesSms,
                                               onInformationsCommercialesSmsSelected,
                                               informationsCommercialesTelephone,
                                               onInformationsCommercialesTelephoneSelected,
                                               onCreationCompte,
                                               formHasError
                                           }: CreationCompteProps) {
    function handleCreationCompte() {
        onCreationCompte();
    }

    const hasError = formHasError();

    return <>
        <Form className="mcf-mt--5">
            <h2>Vos informations</h2>

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
                   errorMessage={formError.nom}
            />

            <Input id="prenom"
                   label="Prénom"
                   onChange={onChangePrenom}
                   value={dataSource.prenom}
                   errorMessage={formError.prenom}
            />

            <Input id="numeroTelephone"
                   label="Numéro de téléphone"
                   onChange={onChangeNumeroTelephone}
                   value={dataSource.numeroTelephone}
                   message="Si besoin, un conseiller pourra vous contacter sur ce numéro à propos de votre rendez-vous."
                   maxLength={10}
                   errorMessage={formError.numeroTelephone}
            />

            <Input id="email"
                   label="E-mail"
                   onChange={onChangeEmail}
                   value={dataSource.email}
                   message="Votre e-mail vous servir d'identifiant pour vous connecter à votre espace personnel sur macif.fr. Un mot de passe temporaire vous sera envoyé sur cet e-mail."
                   errorMessage={formError.email}
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

            <div className="mcf-d--flex mcf-justify-content--between">
                <Button variant="outline--primary">Annuler</Button>
                <Button variant="primary" onClick={handleCreationCompte} disabled={hasError}>
                    Confirmer mon rendez-vous
                </Button>
            </div>
        </Form>
    </>;
}