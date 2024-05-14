// Packages
import { ReactElement, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

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
  fetchTransactions: (query?: string) => Promise<void>;
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

  async function fetchTransactions(query?: string): Promise<void> {
    console.log("query", query);

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
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
