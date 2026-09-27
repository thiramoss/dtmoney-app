import { useForm } from "react-hook-form";
import { Text } from "react-native";
import { AppInput } from "../../../Components/AppInput";

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
            label="Email"
            placeholder="mail@example.com" />
        </>
    )
}