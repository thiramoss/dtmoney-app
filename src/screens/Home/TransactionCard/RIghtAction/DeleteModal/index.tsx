import MaterialIcons from "@react-native-vector-icons/material-icons";
import { FC } from "react";
import { Modal, View, TouchableWithoutFeedback, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { colors } from "../../../../../shared/colors";

interface Params {
    visible: boolean;
    hideModal: () => void;
    handleDeleteTransaction: () => void;
    loading: boolean;
}

export const DeleteModal: FC<Params> = ({
    visible,
    hideModal,
    handleDeleteTransaction,
    loading
}) => {
    return (
        <View className="flex-1 absolute">
            <Modal animationType="slide" transparent visible={visible} onRequestClose={hideModal}>
                <TouchableWithoutFeedback
                    onPress={hideModal}
                >
                    <View className="flex-1 items-center justify-center bg-black/50">
                        <TouchableWithoutFeedback onPress={(e) => e.stopPropagation}>
                            <View className="m-5 bg-background-secondary rounded-[16] p-8 items-center shadow-lg w-[90%] h-[322px] z-9">
                                <View className="w-full flex-row justify-between items-center border-b border-gray-300 pb-6">
                                    <View className="flex-row items-center">
                                        <MaterialIcons name="error-outline" color={colors.gray[400]} size={25} style={{ marginRight: 16}}/>
                                        <Text className="text-white text-xl">Apagar Transação</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <MaterialIcons name="close" color={colors.gray[800]} size={25} onPress={hideModal}/>
                                    </TouchableOpacity>
                                </View>
                                <View className="p-3 flex-1 border-b border-gray-300 items-center justify-center">
                                    <Text className="text-gray-500 text-lg leading-8">Tem certeza que deseja apagar essa transação? Esta ação não pode ser desfeita</Text>
                                </View>
                                <View className="flex-row justify-end gap-4 w-full p-6 pr-0">
                                    <TouchableOpacity className="w-[100] bg-none border-2 border-accent-brand items-center rounded-[6] justify-center p-3" onPress={hideModal}>
                                        <Text className="text-accent-brand">Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-[100] bg-none bg-accent-red-background-primary items-center rounded-[6] justify-center p-3" onPress={handleDeleteTransaction}>
                                        <Text className="text-white">
                                            {loading ? (<ActivityIndicator />) : "Apagar"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </TouchableWithoutFeedback>
            </Modal>

        </View>
    )
}