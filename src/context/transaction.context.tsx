import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from "react";
import { TransactionCategory } from "../shared/interfaces/https/transaction-category-reponse";
import * as transactionServices from "../shared/services/dt-money/transaction.service";
import { CreateTransactionInterface } from "../shared/interfaces/https/create-transaction";
import { Transaction } from "../shared/interfaces/https/transaction";

export type TransactionContextType = {
    fetchCategories: () => Promise<void>;
    categories: TransactionCategory[];
    createTransaction: (transaction: CreateTransactionInterface) => Promise<void>;
    fetchTransactions: () => Promise<void>;
};

export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [categories, setCategories] = useState<TransactionCategory[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchCategories = async () => {
        const categoriesResponse = await transactionServices.getTransactionCategories();
        setCategories(categoriesResponse);
    }

    const createTransaction = async (transaction: CreateTransactionInterface) => {
        await transactionServices.createTransaction(transaction);
    }

    const fetchTransactions = useCallback(async () => {
        const transactionResponse = await transactionServices.getTransactions({
            page: 1,
            perPage: 5,
        })
        setTransactions(transactionResponse.data);
    }, [])
    return (
        <TransactionContext.Provider value={{
            fetchCategories,
            categories,
            createTransaction,
            fetchTransactions
        }}
        >
            {children}
        </TransactionContext.Provider>
    )

}


export const useTransactionContext = () => {
    return useContext(TransactionContext);
}