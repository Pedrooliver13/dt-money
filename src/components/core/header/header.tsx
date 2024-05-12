// Packages
import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import { NewTransactionModal } from "components/shared";

// Assets
import LogoImg from "assets/dt-money-logo.svg";

// Styles
import * as Styled from "./styles";

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <img src={LogoImg} alt="Logo marca da DT-MONEY" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.NewTransactionButton>
              Nova transação
            </Styled.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};
