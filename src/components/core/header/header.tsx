// Packages
import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";

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

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};
