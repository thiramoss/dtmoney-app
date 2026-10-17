import MaterialIcons from "@react-native-vector-icons/material-icons"
import { TouchableOpacity, View } from "react-native"
import { colors } from "../../../../shared/colors"
import { useState } from "react"
import { DeleteModal } from "./DeleteModal"

export const RightAction = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);

    const hideModal = () => setModalVisible(false);



    return (
        <> 
            <TouchableOpacity 
            activeOpacity={0.8} 
            className="h-[140] bg-accent-red-background-primary w-[80] rounded-r-[]6 items-center justify-center"
            onPress={showModal}
            >
                <MaterialIcons name="delete-outline" color={colors.white} size={30}/>
            </TouchableOpacity>
            <DeleteModal  visible={modalVisible} hideModal={hideModal}/>
        </>
    )
}