import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { Transaction } from "../../../shared/interfaces/https/transaction"
import { FC } from "react";
import { Text } from "react-native";

interface Params {
    transaction: Transaction;
}

export const TransactionCard: FC<Params> = ({
    transaction
}) => {
    return (
        <Swipeable> 
            <Text>{transaction.value}</Text>
        </Swipeable>
    )
}