// Packages
import { ReactElement, useEffect, useState } from "react";

// Components
import { SearchForm } from "components/shared";
import { Header, Summary } from "components/core";

// Styles
import * as Styled from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export const Transactions = (): ReactElement => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  async function loadTransactions(): Promise<void> {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <Styled.TransactionsContainer>
        <SearchForm />

        <Styled.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction?.id}>
                <td width="50%">{transaction?.description}</td>
                <td>
                  <Styled.PriceHighlight variant={transaction?.type}>
                    R$ 12.000,00
                  </Styled.PriceHighlight>
                </td>
                <td>{transaction?.category}</td>
                <td>{transaction?.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  );
};
