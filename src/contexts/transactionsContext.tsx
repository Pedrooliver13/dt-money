// Packages
import { api } from "lib/axios";
import { ReactElement, createContext, useEffect, useState } from "react";

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
        q: query,
      },
    });
    setTransactions(response?.data);
  }

  useEffect(() => {
    fecthTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fecthTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
