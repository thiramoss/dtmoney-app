import { Image, View } from "react-native"
import { useKeyboardVisible } from "../../shared/hooks/useKeyboardVisible";

export const AuthHeader = () => {
    const keyboardVisible = useKeyboardVisible();

    if(keyboardVisible) return <></>;

    return (
        <View className="items-center justify-center w-full min-h-40">
            <Image
                source={require("../../assets/logo.png")}
                className="h-[48px] w-[255px]" 
            />
        </View>
    )
}