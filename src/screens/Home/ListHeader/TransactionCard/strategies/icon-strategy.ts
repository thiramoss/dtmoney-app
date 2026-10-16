import MaterialIcons from "@react-native-vector-icons/material-icons";
import { colors } from "../../../../../shared/colors";
import { TransactionType } from "../../../../../shared/enums/transaction-type";
import { TransactionCardType } from "..";

export interface IconsData {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}

export const ICONS: Record<TransactionCardType, IconsData> = {
    [TransactionType.REVENUE]: {
        color: colors["accent-brand-light"],
        name: "arrow-circle-up",
    },
    [TransactionType.EXPENSE]: {
        color: colors["accent-red"],
        name: "arrow-circle-down",
    },
    total: {
        name: "attach-money",
        color: colors.white,
    }
}