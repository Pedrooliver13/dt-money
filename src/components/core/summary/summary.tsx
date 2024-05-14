// Packages
import { ReactElement } from "react";
import {
  ArrowCircleUp as ArrowCircleUpIcon,
  ArrowCircleDown as ArrowCircleDownIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from "phosphor-react";

// Hooks
import { useTransactionContext } from "hooks/useTransactionContext";

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

        <strong>R$ {summary?.income}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color="#f75a68" />
        </header>

        <strong>R$ {summary?.outcome}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color="#fff" />
        </header>

        <strong>R$ {summary?.total}</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  );
};
