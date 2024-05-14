// Packages
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowCircleDown,
  ArrowCircleUp as ArrowCircleUpIcon,
  X as XIcon,
} from "phosphor-react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Styles
import * as Styled from "./styles";

const newTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionSchema>;

export const NewTransactionModal = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  const handleCreateNewTransaction = (data: NewTransactionFormInputs): void => {
    console.log("data", data);
  };

  return (
    <Dialog.Portal>
      <Styled.Overlay />
      <Styled.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Styled.CloseButton>
          <XIcon size={24} />
        </Styled.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Styled.TransactionType>
            <Styled.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUpIcon size={24} />
              Entrada
            </Styled.TransactionTypeButton>

            <Styled.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </Styled.TransactionTypeButton>
          </Styled.TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};
