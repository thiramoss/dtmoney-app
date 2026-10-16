import { Text, View } from "react-native"
import { TransactionType } from "../../../../shared/enums/transaction-type"
import { FC } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { colors } from "../../../../shared/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useTransactionContext } from "../../../../context/transaction.context";
import { ICONS } from "./strategies/icon-strategy";
import { CARD_DATA } from "./strategies/card-data";

export type TransactionCardType = TransactionType | "total"

interface Props {
    type: TransactionCardType;
    amount: number;
}


export const TransactionCard: FC<Props> = ({ amount, type }) => {

    const iconData = ICONS[type];
    const cardData = CARD_DATA[type]

    const { transactions } = useTransactionContext();
    const lastTransaction = transactions.find(({ type: transactionType }) => (transactionType.id === type))

    return (
        <View className={`bg-${cardData.bgColor} w-[280] rounded-[6] px-8 py-6 justify-between mr-6`}>
            <View className="flex-row justify-between items-center mb-1">
                <Text className="text-white text-base">{cardData.label}</Text>
                <MaterialIcons name={iconData.name} color={iconData.color} size={26} />
            </View>
            <View>
                <Text className="text-2xl text-gray-400 font-bold">R${amount.toFixed(2).replace(".", ",")}</Text>
                {
                    type !== "total" && (
                        <Text className="text-gray-700">
                    {
                            lastTransaction?.createdAt
                                ? format(lastTransaction.createdAt, `'Ultima ${cardData.label.toLocaleLowerCase()} em' d 'de' MMMM `, { locale: ptBR })
                                : "Nenhuma transação encontrada"
                            }
                </Text>
                    )}
                
            </View>
        </View>
    )
}