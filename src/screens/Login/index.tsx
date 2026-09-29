import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { PublicStackParamsList } from "../../routes/PublicRoutes";
import { DismissKeyboardView } from "../../Components/DismissKeyboardView";
import { LoginForm } from "./LoginForm";
import { AuthHeader } from "../../Components/AuthHeader";
import { useAuthContext } from "../../context/auth.context";

export const Login = () => {

    const { user } = useAuthContext();

    return (
        <DismissKeyboardView>
            <View className="flex-1 w-[82%] self-center">
                <AuthHeader />
                <LoginForm />
            </View>
        </DismissKeyboardView>
    );
}