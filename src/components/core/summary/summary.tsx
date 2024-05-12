// Packages
import { ReactElement } from "react";
import {
  ArrowCircleUp as ArrowCircleUpIcon,
  ArrowCircleDown as ArrowCircleDownIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from "phosphor-react";

// Styles
import * as Styled from "./styles";

export const Summary = (): ReactElement => {
  return (
    <Styled.SummaryContainer>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color="#fff" />
        </header>

        <strong>R$ 17.400,00</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  );
};
