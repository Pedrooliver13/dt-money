// Packages
import { ReactElement } from "react";

// Assets
import LogoImg from "assets/dt-money-logo.svg";

// Styles
import * as Styled from "./styles";

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <img src={LogoImg} alt="Logo marca da DT-MONEY" />

        <Styled.NewTransactionButton>
          Nova transação
        </Styled.NewTransactionButton>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};
