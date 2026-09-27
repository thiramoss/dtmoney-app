import { useForm } from "react-hook-form";
import { Text } from "react-native";

export interface FormLogin {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const { control, handleSubmit, formState }= useForm<FormLogin>();

    return (
        <>
         <Text className="text-white">LoginForm </Text>
        </>
    )
}