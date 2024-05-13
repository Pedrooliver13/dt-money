// Packages
import { useContext } from "react";

// Contexts
import {
  TransactionsContext,
  TransactionContextProps,
} from "contexts/transactionsContext";

export const useTransactionContext = (): TransactionContextProps => {
  return useContext(TransactionsContext);
};
