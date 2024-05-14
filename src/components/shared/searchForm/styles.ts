// Packages
import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      font-size: 1rem;
      background-color: ${theme["gray-900"]};
      color: ${theme["gray-300"]};

      &::placeholder {
        color: ${theme["gray-500"]};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${theme["green-300"]};
      color: ${theme["green-300"]};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:hover {
        background: ${theme["green-500"]};
        border-color: ${theme["green-500"]};
        color: ${theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
    }
  `}
`;
