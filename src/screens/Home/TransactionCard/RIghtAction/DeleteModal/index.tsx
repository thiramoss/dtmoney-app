import MaterialIcons from "@react-native-vector-icons/material-icons";
import { FC } from "react";
import { Modal, View, TouchableWithoutFeedback, Text, TouchableOpacity } from "react-native"
import { colors } from "../../../../../shared/colors";

interface Params {
    visible: boolean;
    hideModal: () => void;
}

export const DeleteModal: FC<Params> = ({
    visible,
    hideModal
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
                                        <MaterialIcons name="close" color={colors.gray[800]} size={25}/>
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