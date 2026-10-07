import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useAuthContext } from "../../context/auth.context"
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "../../Components/AppHeader";
import { useEffect } from "react";
import { useTransactionContext } from "../../context/transaction.context";
import { useErrorHandler } from "../../shared/hooks/useErrorHandler";
import { ListHeader } from "./ListHeader";

export const Home = () => {

    const {handleLogout} = useAuthContext();
    const { fetchCategories } = useTransactionContext();
    const { handleError } = useErrorHandler();

    const handleFetchCategories = async () => {
        try {
            await fetchCategories();
        } catch (error) {
            handleError(error, "Falha ao buscar categorias");
        }
    }

    useEffect(() => {
        (async () => {
           await handleFetchCategories();
        })()

    }, [])

    return (
        <SafeAreaView className="flex-1 bg-background-secondary">
            <FlatList 
                ListHeaderComponent={ListHeader}
                data={[]}
                renderItem={() => <></>}
            />
            
        </SafeAreaView>
    )
}