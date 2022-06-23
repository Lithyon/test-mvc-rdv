import React from "react";

import ChoiceSwitcher from "../../../../components/ChoiceSwitcher";
import {ParrainageChoixModelView} from "../../ModelView/Parrainage/ParrainageChoixModelView";
import {ParrainageNumeroSocietaireModelView} from "../../ModelView/Parrainage/ParrainageNumeroSocietaireModelView";
import {ParrainageCode} from "../../../../../Domain/Data/Enum/Parrainage";
import Input from "../../../../components/Input";

export interface ParrainageProps {
    readonly dataSource: ParrainageChoixModelView;
    readonly parrainageChoix: Array<ParrainageChoixModelView>;
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView;
    readonly onParrainageChoixSelected: Function;
    readonly onChangeParrainageNumeroSocietaire: Function;
}

export function Parrainage({dataSource, parrainageChoix, parrainageNumeroSocietaire, onParrainageChoixSelected, onChangeParrainageNumeroSocietaire}: ParrainageProps) {
    return <>
        <ChoiceSwitcher onChoiceSelected={onParrainageChoixSelected}
                        choiceSelected={dataSource}
                        dataSource={parrainageChoix}
                        label="Bénéficiez-vous d'un parrainage ? (Facultatif)"
                        id="choixParrainage"
        />

        {/* TODO : Pas de caractères spéciaux : Ne pas les écrire ou déclencher l'erreur si il y en a ???? */}
        {dataSource.code === ParrainageCode.OUI &&
            <Input value={parrainageNumeroSocietaire.numeroSocietaire}
                   id="toot" onChange={onChangeParrainageNumeroSocietaire}
                   label="Numéro de sociétaire de votre parrain"
                   message="Ce numéro est inscrit dans l'email d'invitation au parrainage. Vous pourrez également communiquer cette information au moment de votre rendez-vous."
                   maxLength={15}/>
        }
    </>;
}

export default Parrainage;