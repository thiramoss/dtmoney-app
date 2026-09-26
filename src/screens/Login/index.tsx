import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { PublicStackParamsList } from "../../routes";

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return (
        <View className="flex-1 items-center justify-center">
            <Text>Tela inicial</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}   >
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}