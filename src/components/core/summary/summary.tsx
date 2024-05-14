// Packages
import { ReactElement } from "react";
import {
  ArrowCircleUp as ArrowCircleUpIcon,
  ArrowCircleDown as ArrowCircleDownIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from "phosphor-react";

// Hooks
import { useSummary } from "hooks/useSummary";

// Utils
import { priceFormatter } from "utils/formatter";

// Styles
import * as Styled from "./styles";

export const Summary = (): ReactElement => {
  const summary = useSummary();

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
