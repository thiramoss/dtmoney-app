import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { CreateTransactionInterface } from "../../shared/interfaces/https/create-transaction";
import { colors } from "../../shared/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useBottomSheetContext } from "../../context/bottomsheet.context";

export const NewTransaction = () => {

    const { closeBottomSheet } = useBottomSheetContext();

    const [transaction, setTransation] = useState<CreateTransactionInterface>({
        categoryId: 0,
        description: "",
        typeId: 0,
        value: 0,
    });

    return (
        <View className="px-8 py-6">
            <TouchableOpacity className="w-full flex-row items-center justify-between" onPress={closeBottomSheet}>
                <Text className="text-white text-xl font-bold">Nova transação</Text>
                <MaterialIcons name="close" size={20} color={colors.gray["700"]}/>
            </TouchableOpacity>
        </View>
    )
}