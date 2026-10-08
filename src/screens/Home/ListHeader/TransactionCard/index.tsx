import { View } from "react-native"
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

export const TransactionCard: FC<Props> = ({amount, type}) => {

    const iconData = ICONS[type]

    return (
        <View> 
            <MaterialIcons name={iconData.name} color={iconData.color} size={26}/>
        </View>
    )
}