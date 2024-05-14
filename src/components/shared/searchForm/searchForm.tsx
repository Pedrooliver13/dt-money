// Packages
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlass as MagnifyingGlassIcon } from "phosphor-react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";

// Contexts
import {
  TransactionContextProps,
  TransactionsContext,
} from "contexts/transactionsContext";

// Styles
import * as Styled from "./styles";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormValues = zod.infer<typeof searchFormSchema>;

export const SearchForm = (): ReactElement => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context: TransactionContextProps) => context?.fetchTransactions
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransactions = async (
    data: SearchFormValues
  ): Promise<void> => {
    await fetchTransactions(data?.query);
  };

  return (
    <Styled.SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlassIcon size={20} />
        Buscar
      </button>
    </Styled.SearchFormContainer>
  );
};
