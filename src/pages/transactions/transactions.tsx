// Packages
import { ReactElement } from "react";
import { useContextSelector } from "use-context-selector";

// Components
import { SearchForm } from "components/shared";
import { Header, Summary } from "components/core";

// Contexts
import {
  TransactionsContext,
  TransactionContextProps,
} from "contexts/transactionsContext";

// Utils
import { dateFormatter, priceFormatter } from "utils/formatter";

// Styles
import * as Styled from "./styles";

export const Transactions = (): ReactElement => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context: TransactionContextProps) => context.transactions
  );

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
                    {transaction?.type === "outcome" && "- "}
                    {priceFormatter.format(transaction?.price)}
                  </Styled.PriceHighlight>
                </td>
                <td>{transaction?.category}</td>
                <td>
                  {dateFormatter.format(new Date(transaction?.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  );
};
