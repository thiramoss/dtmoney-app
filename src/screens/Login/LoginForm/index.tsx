import { useForm } from "react-hook-form";
import { Text } from "react-native";
import { AppInput } from "../../../Components/AppInput";
import { AppButton } from "../../../Components/AppButton";

export interface FormLogin {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const { control, handleSubmit, formState }= useForm<FormLogin>();

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

        <AppButton mode='fill' iconName="arrow-forward">
            Login
        </AppButton>
        </>
    )
}