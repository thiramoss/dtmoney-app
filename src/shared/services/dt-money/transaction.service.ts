import { dtMoneyApi } from "../../api/dt-money";
import { CreateTransactionInterface } from "../../interfaces/https/create-transaction";
import { TransactionCategory } from "../../interfaces/https/transaction-category-reponse";

export const getTransactionCategories = async (): Promise<TransactionCategory[]> => {
    const { data } = await dtMoneyApi.get<TransactionCategory[]>("/transaction/categories");
    return data;
};

export const createTransaction = async (transaction: CreateTransactionInterface) => {
    await dtMoneyApi.post("/transaction", transaction);
};