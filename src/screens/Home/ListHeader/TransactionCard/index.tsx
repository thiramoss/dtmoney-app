import { Text, View } from "react-native"
import { TransactionType } from "../../../../shared/enums/transaction-type"
import { FC } from "react";
import { colors } from "../../../../shared/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";

type TransactionCardType = TransactionType | "total"

interface Props {
    type: TransactionCardType;
    amount: number;
}

interface IconsData {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}

const ICONS: Record<TransactionCardType, IconsData> = {
    [TransactionType.REVENUE] : {
        color: colors["accent-brand-light"],
        name:"arrow-circle-up",
    },
    [TransactionType.EXPENSE]: {
        color: colors["accent-red"],
        name:"arrow-circle-down",
    },
    total: {
        name: "attach-money",
        color: colors.white,
    }
}

interface CardData {
    label: string;
    bgColor: string;
}

const CARD_DATA: Record<TransactionCardType, CardData> = {
    [TransactionType.EXPENSE]: {
        label: "Saída",
        bgColor: "background-tertiary",
    },
     [TransactionType.REVENUE]: {
        label: "Entrada",
        bgColor: "background-tertiary",
    },
    total: {
        label: "Total",
        bgColor: "accent-brand-background-primary"
    }
}

export const TransactionCard: FC<Props> = ({amount, type}) => {

    const iconData = ICONS[type];
    const cardData = CARD_DATA[type]

    return (
        <View className={`bg-${cardData.bgColor} w-[280] rounded-[6] px-8 py-6 justify-between mr-6`}> 
            <View className="flex-row justify-between items-center mb-1">
                <Text className="text-white text-base">{cardData.label}</Text>
                <MaterialIcons name={iconData.name} color={iconData.color} size={26}/>
            </View>
            <View>
                <Text className="text-2xl text-gray-400 font-bold">R${amount.toFixed(2).replace(".",",")}</Text>
            </View>
        </View>
    )
}