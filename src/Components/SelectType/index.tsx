import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { TransactionType } from "../../shared/enums/transaction-type";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import clsx from "clsx";
import { colors } from "../../shared/colors";

interface Props {
    setTransactionType: (type: TransactionType) => void;
    typeId: number;
}

export const TransactionTypeSelector: FC<Props> = ({
    setTransactionType,
    typeId
}) => {
    return (
        <View className="flex-row justify-between gap-2 mt-2">
            <TouchableOpacity
                className={clsx("flex-row items-center p-2 flex-1 justify-center h-[58] rounded-lg", typeId === TransactionType.REVENUE ? "bg-accent-brand" : "bg-background-tertiary")
                }
                onPress={() => setTransactionType(TransactionType.REVENUE)}
                >
                <MaterialIcons name="arrow-circle-up" color={
                    typeId === TransactionType.REVENUE ? colors.white : colors["accent-brand-light"]
                }
                    size={30}
                    className="mr-2"
                />
                <Text className="text-white font-bold">Entrada</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className={clsx("flex-row items-center p-2 flex-1 justify-center h-[58] rounded-lg", typeId === TransactionType.EXPENSE ? "bg-accent-red" : "bg-background-tertiary")}
                onPress={() => setTransactionType(TransactionType.EXPENSE)}
                >
                <MaterialIcons name="arrow-circle-down" color={
                    typeId === TransactionType.EXPENSE ? colors.white : colors["accent-red"]
                }
                    size={30}
                    className="mr-2"
                />
                <Text className="text-white font-bold">Saída</Text>
            </TouchableOpacity>
        </View>
    )
}