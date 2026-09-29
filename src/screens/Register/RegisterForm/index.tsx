import { useForm } from "react-hook-form";
import { AppInput } from "../../../Components/AppInput";
import { Text, View } from "react-native";
import { AppButton } from "../../../Components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PublicStackParamsList } from "../../../routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

interface FormRegisterPrams {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {

    const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormRegisterPrams>({
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema)
    });

        const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

        const onSubmit = async () => {

        }
    

    return (
        <>
            <AppInput
                control={control}
                name="name"
                placeholder="Seu nome"
                label="NOME"
                leftIconName="person"
            />
            <AppInput
                control={control}
                name="email"
                placeholder="mail@example.com"
                label="EMAIL"
                leftIconName="mail-outline"
            />
            <AppInput
                control={control}
                name="password"
                placeholder="Sua senha"
                leftIconName="lock-outline"
                label="SENHA"
                secureTextEntry
            />
            <AppInput
                control={control}
                name="confirmPassword"
                placeholder="Confirm Password"
                leftIconName="lock-outline"
                label="CONFIRMAR SENHA"
                secureTextEntry
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