import MaterialIcons from "@react-native-vector-icons/material-icons"
import { View } from "react-native"
import { colors } from "../../shared/colors"
import { Text } from "react-native"
import { FC, PropsWithChildren } from "react"


export const ErrorMessage: FC<PropsWithChildren> = ({children}) => {
    return (
        <View className="flex-row items-center mt-1"> 
            <MaterialIcons name="error-outline" size={16} color={colors["accent-red-background-primary"]} className="mr-1"/>
            <Text className="text-accent-red-background-primary"> {children} </Text>
            
        </View>
    )
}