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
    const { fetchCategories, fetchTransactions } = useTransactionContext();
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
           await Promise.all([handleFetchCategories(),fetchTransactions()])
        })()

    }, [])

    return (
        <SafeAreaView className="flex-1 bg-background-primary">
            <FlatList 
                className="bg-background-primary"
                ListHeaderComponent={ListHeader}
                data={[]}
                renderItem={() => <></>}
            />
            
        </SafeAreaView>
    )
}