// Packages
import { ReactElement, createContext, useEffect, useState } from "react";

// Libs
import { api } from "lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export interface TransactionContextProps {
  transactions: Array<Transaction>;
  fecthTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextProps);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): ReactElement => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  async function fecthTransactions(query?: string): Promise<void> {
    const response = await api.get(`/transactions`, {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response?.data);
  }

  async function createTransaction(
    data: CreateTransactionInput
  ): Promise<void> {
    const { category, description, price, type } = data;

    const response = await api.post("/transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fecthTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fecthTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
