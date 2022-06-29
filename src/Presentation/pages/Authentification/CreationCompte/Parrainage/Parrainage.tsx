import React from "react";

import ChoiceSwitcher from "../../../../components/ChoiceSwitcher";
import Input from "../../../../components/Input";
import {BooleanChoiceModelView} from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {BooleanChoiceCode} from "../../../../../Domain/Data/Enum/BooleanChoice";

export interface ParrainageProps {
    readonly dataSource: BooleanChoiceModelView;
    readonly parrainageChoix: Array<BooleanChoiceModelView>;
    readonly noSocietaireParrain: string;
    readonly onParrainageChoixSelected: Function;
    readonly onChangeParrainageNumeroSocietaire: Function;
    readonly errorMessageNumeroSocietaire?: string;
}

export function Parrainage({
                               dataSource,
                               parrainageChoix,
                               noSocietaireParrain,
                               onParrainageChoixSelected,
                               onChangeParrainageNumeroSocietaire,
                               errorMessageNumeroSocietaire
                           }: ParrainageProps) {
    return <>
        <ChoiceSwitcher onChoiceSelected={onParrainageChoixSelected}
                        choiceSelected={dataSource}
                        dataSource={parrainageChoix}
                        label="Bénéficiez-vous d'un parrainage ?"
                        labelInfo="(Facultatif)"
                        id="choixParrainage"
        />

        {dataSource.code === BooleanChoiceCode.OUI &&
            <Input value={noSocietaireParrain}
                   id="numeroSocietaireParrain"
                   onChange={onChangeParrainageNumeroSocietaire}
                   label="Numéro de sociétaire de votre parrain"
                   message="Ce numéro est inscrit dans l'email d'invitation au parrainage. Vous pourrez également communiquer cette information au moment de votre rendez-vous."
                   maxLength={15}
                   errorMessage={errorMessageNumeroSocietaire}/>
        }
    </>;
}

export default Parrainage;