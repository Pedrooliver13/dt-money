// Packages
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
    const response = await fetch(
      `http://localhost:3333/transactions?q=${query}`
    );
    const data = await response.json();

    setTransactions(data);
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
