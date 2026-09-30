import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { AppInput } from "../../../Components/AppInput";
import { AppButton } from "../../../Components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PublicStackParamsList } from "../../../routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAuthContext } from "../../../context/auth.context";
import { AxiosError } from "axios";

export interface FormLoginParams {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormLoginParams>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema),
    });

    const { handleAuthenticate } = useAuthContext();

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

    const onSubmit = async (userData: FormLoginParams) => {
        try {
            await handleAuthenticate(userData);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data);
            }
        }
    };

    return (
        <>
            <AppInput
                control={control}
                name="email"
                label="EMAIL"
                placeholder="mail@example.com"
                autoCapitalize="none"
                autoCorrect={false}
                leftIconName="mail-outline"
            />

            <AppInput
                control={control}
                name="password"
                label="SENHA"
                placeholder="Sua senha"
                leftIconName="lock-outline"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
                <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
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