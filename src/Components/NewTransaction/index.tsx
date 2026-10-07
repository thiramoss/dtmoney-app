import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { CreateTransactionInterface } from "../../shared/interfaces/https/create-transaction";
import { colors } from "../../shared/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useBottomSheetContext } from "../../context/bottomsheet.context";
import { TextInput } from "react-native-gesture-handler";
import CurrencyInput from "react-native-currency-input";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { TransactionTypeSelector } from "../SelectType";
import { SelectionCategoryModal } from "../SelectCategoryModal";

export const NewTransaction = () => {

    const { closeBottomSheet } = useBottomSheetContext();

    const [transaction, setTransation] = useState<CreateTransactionInterface>({
        categoryId: 0,
        description: "",
        typeId: 0,
        value: 0,
    });

    const setTransactionData = (key: keyof CreateTransactionInterface, value: string | number) => {
        setTransation(prevData => ({
            ...prevData,
            [key]: value
        }));
    };


    return (
        <View className="px-8 py-6">
            <TouchableOpacity className="w-full flex-row items-center justify-between" onPress={closeBottomSheet}>
                <Text className="text-white text-xl font-bold">Nova transação</Text>
                <MaterialIcons name="close" size={20} color={colors.gray["700"]} />
            </TouchableOpacity>
            <View className="flex-1 mt-8 mb-8">
                <BottomSheetTextInput
                    placeholder="Descrição"
                    placeholderTextColor={colors.gray["700"]}
                    value={transaction.description}
                    onChangeText={(text) => setTransactionData("description", text)}
                    className="text-white text-lg bg-background-primary my-2 pl-4 rounded-[6]"
                />
                <CurrencyInput
                    className="text-white text-lg bg-background-primary my-2 pl-4 rounded-[6]"
                    value={transaction.value}
                    prefix="R$"
                    delimiter="."
                    separator=","
                    precision={2}
                    minValue={0}
                    onChangeValue={(value) => setTransactionData("value", value ?? 0)}
                    renderTextInput={(textInputProps) => (
                        <BottomSheetTextInput {...textInputProps} />
                    )}
                />

                <SelectionCategoryModal 
                    selectedCategory={transaction.categoryId}
                    onSelect={(categoryId) => setTransactionData("categoryId", categoryId)}
                />

                <TransactionTypeSelector
                    typeId={transaction.typeId}
                    setTransactionType={(typeId) => setTransactionData("typeId", typeId)}
                />
            </View>
        </View>
    )
}