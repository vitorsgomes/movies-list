import React from "react";
import { Provider } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import List from "./components/List";
import configureStore from "./store/configureStore";
import defaultTheme from "./themes/default";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F8F8F8;
    font-family: Helvetica, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const MainWrapper = styled.section`
  max-width: 1200px;
  min-width: 340px;
  margin: 0 auto;
  padding: 10px;
`;

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <MainWrapper>
          <List />
        </MainWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
