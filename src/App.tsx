// Packages
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

// Pages
import { Transactions } from "pages/transactions";

// Styles
import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/theme/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
};
