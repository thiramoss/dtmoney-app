import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { PublicStackParamsList } from "../../routes/PublicRoutes";
import { DismissKeyboardView } from "../../Components/DismissKeyboardView";
import { LoginForm } from "./LoginForm";

export const Login = () => {

    return (
        <DismissKeyboardView>
            <View className="flex-1 w-[82%] self-center">
                <LoginForm />
            </View>
        </DismissKeyboardView>
    );
}