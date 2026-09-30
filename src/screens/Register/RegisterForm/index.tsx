import { useForm } from "react-hook-form";
import { AppInput } from "../../../Components/AppInput";
import { Text, View } from "react-native";
import { AppButton } from "../../../Components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PublicStackParamsList } from "../../../routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAuthContext } from "../../../context/auth.context";
import { AxiosError } from "axios";

export interface FormRegisterParams {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {

    const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormRegisterParams>({
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema)
    });

        const {handleRegister} = useAuthContext();

        const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

        const onSubmit = async (userData: FormRegisterParams) => {
            try {
                await handleRegister(userData);
            } catch (error) {
                if(error instanceof AxiosError) {
                    console.log(error.response?.data);
                }
                
            }
        }
    

    return (
        <>
            <AppInput
                control={control}
                name="name"
                placeholder="Seu nome"
                label="NOME"
                leftIconName="person"
                autoCorrect={false}
            />
            <AppInput
                control={control}
                name="email"
                placeholder="mail@example.com"
                label="EMAIL"
                leftIconName="mail-outline"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <AppInput
                control={control}
                name="password"
                placeholder="Sua senha"
                leftIconName="lock-outline"
                label="SENHA"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />
            <AppInput
                control={control}
                name="confirmPassword"
                placeholder="Confirm Password"
                leftIconName="lock-outline"
                label="CONFIRMAR SENHA"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
                <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
                    Cadastrar
                </AppButton>
                <View>
                    <Text className="mb-6 text-gray-600 text-base">Já possui uma conta?</Text>
                    <AppButton mode='outline' iconName="arrow-forward" onPress={() => navigation.navigate("Login")}>
                        Acessar
                    </AppButton>
                </View>


            </View>
        </>
    )
}