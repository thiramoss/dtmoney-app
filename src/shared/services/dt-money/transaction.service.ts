import { dtMoneyApi } from "../../api/dt-money";
import { CreateTransactionInterface } from "../../interfaces/https/create-transaction";
import { GetTransactionParams, GetTransactionResponse } from "../../interfaces/https/get-transactions-request";
import { TransactionCategory } from "../../interfaces/https/transaction-category-reponse";
import qs from "qs";

export const getTransactionCategories = async (): Promise<TransactionCategory[]> => {
    const { data } = await dtMoneyApi.get<TransactionCategory[]>("/transaction/categories");
    return data;
};

export const createTransaction = async (transaction: CreateTransactionInterface) => {
    await dtMoneyApi.post("/transaction", transaction);
};

export const getTransactions = async (params: GetTransactionParams): Promise<GetTransactionResponse> => {
    const {data} = await dtMoneyApi.get<GetTransactionResponse>('/transaction', {
        params,
        paramsSerializer: (p) => qs.stringify(p, { arrayFormat: "repeat"}),
    })

    return data;
}