import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { Transaction } from "../../../shared/interfaces/https/transaction"
import { FC } from "react";
import { Text, View } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { format } from "date-fns";
import { colors } from "../../../shared/colors";
import { TransactionType } from "../../../shared/enums/transaction-type";
import clsx from "clsx";

interface Params {
    transaction: Transaction;
}

export const TransactionCard: FC<Params> = ({
    transaction
}) => {
    const isExpense = transaction.type.id === TransactionType.EXPENSE;
    return (
        <Swipeable
            containerStyle={{
                alignItems: "center",
                alignSelf: "center",
                overflow: "visible",
                width: "90%",
                marginBottom: 16
            }}
        >
            <View className="h-[140]  bg-background-tertiary rounded-[6] p-6">
                <Text className="text-white text-base">{transaction.description}</Text>
                <Text
                    className={clsx("text-2xl font-bold mt-2",
                        isExpense ? "text-accent-red" : "text-accent-brand-light")}>
                    {isExpense && "-"}

                    R$ {transaction.value.toFixed(2).replace(".", ",")}</Text>
                <View className="flex-row w-full justify-between items-center">
                    <View className="flex-row items-center mt-3">
                        <MaterialIcons name="label-outline" size={23} color={colors.gray[700]} />
                        <Text className="text-gray-700 text-base ml-2">{transaction.category.name}</Text>
                    </View>
                    <View className="items-center flex-row mt-3">
                        <MaterialIcons name="calendar-month" size={20} color={colors.gray[700]} />
                        <Text className="text-gray-700 text-base ml-2">
                            {format(transaction.createdAt, "dd/MM/yyyy")}
                        </Text>
                    </View>

                </View>
            </View>
        </Swipeable>
    )
}