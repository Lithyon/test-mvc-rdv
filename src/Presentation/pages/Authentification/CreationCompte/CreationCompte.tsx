import {CiviliteModelView} from "../ModelView/Civilite/CiviliteModelView";
import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {Button, Form} from "macif-components";
import {InformationsCommercialesModelView} from "../ModelView/InformationsCommerciales/InformationsCommercialesModelView";
import {ParrainageChoixModelView} from "../ModelView/Parrainage/ParrainageChoixModelView";
import {ParrainageNumeroSocietaireModelView} from "../ModelView/Parrainage/ParrainageNumeroSocietaireModelView";
import Parrainage from "./Parrainage/Parrainage";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {DEMANDES_AVEC_PARRAINAGE} from "../../../../Domain/Data/Enum/Demande";
import AuthentificationController from "../AuthentificationController";

interface CreationCompteSelectionModelView {
    readonly civilite: CiviliteModelView;
    readonly parrainageChoix: ParrainageChoixModelView;
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView;
    readonly informationsCommercialesEmail: InformationsCommercialesModelView;
    readonly informationsCommercialesSms: InformationsCommercialesModelView;
    readonly informationsCommercialesTelephone: InformationsCommercialesModelView;
}

export interface CreationCompteProps {
    readonly errors: { [key: string]: string };
    readonly dataSource: CreationCompteSelectionModelView;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly civilite: Array<CiviliteModelView>;
    readonly parrainageChoix: Array<ParrainageChoixModelView>;
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView;
    readonly onCiviliteSelected: Function;
    readonly onParrainageChoixSelected: Function;
    readonly onChangeParrainageNumeroSocietaire: Function;
    readonly informationsCommercialesEmail: Array<InformationsCommercialesModelView>;
    readonly onInformationsCommercialesEmailSelected: Function;
    readonly informationsCommercialesSms: Array<InformationsCommercialesModelView>;
    readonly onInformationsCommercialesSmsSelected: Function;
    readonly informationsCommercialesTelephone: Array<InformationsCommercialesModelView>;
    readonly onInformationsCommercialesTelephoneSelected: Function;
    readonly onValidationFormulaire: Function;
}

export default function CreationCompteView({
                                               errors,
                                               dataSource,
                                               rendezVous,
                                               civilite,
                                               parrainageChoix,
                                               parrainageNumeroSocietaire,
                                               onCiviliteSelected,
                                               onParrainageChoixSelected,
                                               onChangeParrainageNumeroSocietaire,
                                               informationsCommercialesEmail,
                                               onInformationsCommercialesEmailSelected,
                                               informationsCommercialesSms,
                                               onInformationsCommercialesSmsSelected,
                                               informationsCommercialesTelephone,
                                               onInformationsCommercialesTelephoneSelected,
                                               onValidationFormulaire
                                           }: CreationCompteProps) {
    function handleValidationFormulaire() {
        onValidationFormulaire();
    }

    return <>
        <Form className="mcf-mt--5">
            <h2>Vos informations</h2>
            <p className="mcf-mb--6 mcf-font-weight--bold">
                <i className="icon-macif-mobile-info-plein"></i>
                <span className="mcf-ml--1">Sauf mention contraire, tous les champs sont requis.</span>
            </p>
            <ChoiceSwitcher onChoiceSelected={onCiviliteSelected}
                            choiceSelected={dataSource.civilite}
                            dataSource={civilite}
                            label="Civilité"
                            id="civilite"
                            errorMessage={errors.civilite}
            />
            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesEmailSelected}
                            choiceSelected={dataSource.informationsCommercialesEmail}
                            dataSource={informationsCommercialesEmail}
                            label="J'accepte de recevoir ces informations commerciales par e-mail ?"
                            id="informationsCommercialesEmail"
                            errorMessage={errors.informationsCommercialesEmail}
            />
            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesSmsSelected}
                            choiceSelected={dataSource.informationsCommercialesSms}
                            dataSource={informationsCommercialesSms}
                            label="J'accepte de recevoir ces informations commerciales par SMS ?"
                            id="informationsCommercialesSms"
                            errorMessage={errors.informationsCommercialesSms}
            />
            <ChoiceSwitcher onChoiceSelected={onInformationsCommercialesTelephoneSelected}
                            choiceSelected={dataSource.informationsCommercialesTelephone}
                            dataSource={informationsCommercialesTelephone}
                            label="J'accepte de recevoir ces informations commerciales par message vocal ?"
                            id="informationsCommercialesTelephone"
                            errorMessage={errors.informationsCommercialesTelephone}
            />

            {DEMANDES_AVEC_PARRAINAGE.includes(rendezVous.demandeSelected.code) &&
                <Parrainage dataSource={dataSource.parrainageChoix}
                            parrainageChoix={parrainageChoix}
                            parrainageNumeroSocietaire={parrainageNumeroSocietaire}
                            onParrainageChoixSelected={onParrainageChoixSelected}
                            onChangeParrainageNumeroSocietaire={onChangeParrainageNumeroSocietaire}
                            errorMessageNumeroSocietaire={errors.numeroSocietaire}
                />
            }

            <div className="mcf-d--flex mcf-justify-content--between">
                <Button variant="outline--primary">Annuler</Button>
                <Button variant="primary" onClick={handleValidationFormulaire} disabled={Object.keys(errors).length > 0}>Confirmer mon rendez-vous</Button>
            </div>
        </Form>
    </>;
}