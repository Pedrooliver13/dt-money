// Packages
import { ReactElement } from "react";

// Components
import { Header, Summary } from "components/core";

// Styles
import * as Styled from "./styles";

export const Transactions = (): ReactElement => {
  return (
    <div>
      <Header />
      <Summary />

      <Styled.TransactionsContainer>
        <Styled.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <Styled.PriceHighlight variant="income">
                  R$ 12.000,00
                </Styled.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambuger</td>
              <td>
                <Styled.PriceHighlight variant="outcome">
                  R$ 59,00
                </Styled.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  );
};
