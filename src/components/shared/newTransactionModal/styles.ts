// Packages
import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${theme["gray-800"]};

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      margin-top: 2rem;

      input {
        border-radius: 6px;
        border: 0;
        background: ${theme["gray-900"]};
        color: ${theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
          color: ${theme["gray-500"]};
        }
      }

      button[type="submit"] {
        height: 50px;
        border: 0;
        background: ${theme["green-500"]};
        color: ${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background-color: ${theme["green-700"]};
          transition: background-color 0.2s;
        }
      }
    }
  `}
`;

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme["gray-500"]};
  `}
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${theme["gray-700"]};
    border-radius: 6px;
    padding: 1rem;
    border: 0;
    cursor: pointer;
    color: ${theme["gray-300"]};

    svg {
      color: ${variant === "income" ? theme["green-300"] : theme["red-300"]};
    }

    &[data-state="unchecked"]:hover {
      background: ${theme["gray-600"]};
      transition: background-color 0.2s;
    }

    &[data-state="checked"] {
      color: ${theme.white};
      background: ${variant === "income"
        ? theme["green-500"]
        : theme["red-500"]};

      svg {
        color: ${theme.white};
      }
    }
  `}
`;
