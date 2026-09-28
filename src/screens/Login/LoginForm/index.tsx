import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { AppInput } from "../../../Components/AppInput";
import { AppButton } from "../../../Components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PublicStackParamsList } from "../../../routes/PublicRoutes";

export interface FormLogin {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const { control, handleSubmit, formState: { isSubmitting} } = useForm<FormLogin>();

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

    return (
        <>
            <AppInput
                control={control}
                name="email"
                label="EMAIL"
                placeholder="mail@example.com"
                leftIconName="mail-outline"
            />

            <AppInput
                control={control}
                name="password"
                label="SENHA"
                placeholder="Sua senha"
                leftIconName="lock-outline"
                secureTextEntry
            />

            <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
                <AppButton iconName="arrow-forward">
                    Login
                </AppButton>
                <View>
                    <Text className="mb-6 text-gray-600 text-base">Ainda não possui uma conta?</Text>
                    <AppButton mode='outline' iconName="arrow-forward" onPress={() => navigation.navigate("Register")}>
                        Cadastrar
                    </AppButton>
                </View>


            </View>

        </>
    )
}