// Packages
import { ReactElement } from "react";
import {
  ArrowCircleUp as ArrowCircleUpIcon,
  ArrowCircleDown as ArrowCircleDownIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from "phosphor-react";

// Hooks
import { useTransactionContext } from "hooks/useTransactionContext";

// Utils
import { priceFormatter } from "utils/formatter";

// Styles
import * as Styled from "./styles";

export const Summary = (): ReactElement => {
  const { transactions } = useTransactionContext();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction?.price;
        acc.total += transaction?.price;
      } else {
        acc.outcome += transaction?.price;
        acc.total -= transaction?.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Styled.SummaryContainer>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary?.income)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary?.outcome)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary?.total)}</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  );
};
