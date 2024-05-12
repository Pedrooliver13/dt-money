// Packages
import { ReactElement } from "react";
import { MagnifyingGlass as MagnifyingGlassIcon } from "phosphor-react";

// Styles
import * as Styled from "./styles";

export const SearchForm = (): ReactElement => {
  return (
    <Styled.SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlassIcon size={20} />
        Buscar
      </button>
    </Styled.SearchFormContainer>
  );
};
