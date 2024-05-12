// Packages
import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X as XIcon } from "phosphor-react";

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

          <button type="submit">Cadastrar</button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};
