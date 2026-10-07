import { ScrollView, View } from "react-native"
import { AppHeader } from "../../../Components/AppHeader"

export const ListHeader = () => {
    return (
        <>
        <AppHeader />
        <View className="h-[150] w-full">
            <View className="h-[50] bg-background-primary"/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="absolute pl-6 h-[141]">
                <View className="h-[100] w-[100] bg-white mr-5"></View>
                <View className="h-[100] w-[100] bg-white mr-5"></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>
                <View className="h-[100] w-[100] bg-white mr-5 "></View>

            </ScrollView>
        </View>
        </>
    )
}