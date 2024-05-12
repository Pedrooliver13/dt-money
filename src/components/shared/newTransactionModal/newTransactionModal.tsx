// Packages
import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowCircleDown,
  ArrowCircleUp as ArrowCircleUpIcon,
  X as XIcon,
} from "phosphor-react";

// Styles
import * as Styled from "./styles";

export const NewTransactionModal = (): ReactElement => {
  return (
    <Dialog.Portal>
      <Styled.Overlay />
      <Styled.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Styled.CloseButton>
          <XIcon size={24} />
        </Styled.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <Styled.TransactionType>
            <Styled.TransactionTypeButton variant="income">
              <ArrowCircleUpIcon size={24} />
              Entrada
            </Styled.TransactionTypeButton>

            <Styled.TransactionTypeButton variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </Styled.TransactionTypeButton>
          </Styled.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};
