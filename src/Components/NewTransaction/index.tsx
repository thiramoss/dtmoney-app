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
import { transactionSchema } from "./schema";
import * as Yup from "yup";
import { AppButton } from "../AppButton";
import { ErrorMessage } from "../ErrorMessage";

type ValidationErrorsTypes = Record<keyof CreateTransactionInterface, string>

export const NewTransaction = () => {

    const { closeBottomSheet } = useBottomSheetContext();

    const [transaction, setTransation] = useState<CreateTransactionInterface>({
        categoryId: 0,
        description: "",
        typeId: 0,
        value: 0,
    });

    const [validationErrors, setValidationsErrors] = useState<ValidationErrorsTypes>();

    const handleCreateTransaction = async () => {
        try {
            await transactionSchema.validate(transaction, {
                abortEarly: false,
            })
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = {} as ValidationErrorsTypes;

                error.inner.forEach((err) => {
                    if (err.path) {
                        errors[err.path as keyof CreateTransactionInterface] = err.message;
                    }
                })

                setValidationsErrors(errors)
            }
        }
    }

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
                {
                    validationErrors ?. description && (
                    <ErrorMessage>{validationErrors.description}</ErrorMessage>
                )}
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
                {
                    validationErrors ?. value && (
                    <ErrorMessage>{validationErrors.value}</ErrorMessage>
                )}

                <SelectionCategoryModal
                    selectedCategory={transaction.categoryId}
                    onSelect={(categoryId) => setTransactionData("categoryId", categoryId)}
                />
                {
                    validationErrors ?. categoryId && (
                    <ErrorMessage>{validationErrors.categoryId}</ErrorMessage>
                )}

                <TransactionTypeSelector
                    typeId={transaction.typeId}
                    setTransactionType={(typeId) => setTransactionData("typeId", typeId)}
                />
                {
                    validationErrors ?. typeId && (
                    <ErrorMessage>{validationErrors.typeId}</ErrorMessage>
                )}

                <View className="my-4">
                    <AppButton onPress={handleCreateTransaction}>Registrar</AppButton>
                </View>
            </View>
        </View>
    )
}