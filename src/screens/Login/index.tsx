import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { PublicStackParamsList } from "../../routes/PublicRoutes";
import { DismissKeyboardView } from "../../Components/DismissKeyboardView";

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return (
        <DismissKeyboardView>
            <Text>Tela inicial</Text>
            <TextInput  className="bg-gray-500 w-full"   />
            <TouchableOpacity onPress={() => navigation.navigate("Register")}   >
                <Text>Registrar</Text>
            </TouchableOpacity>
        </DismissKeyboardView>
    );
}