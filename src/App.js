import React, { Fragment, Component } from 'react';
import GlobalStyle from './theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { themeLight } from './theme/themeLight';

import { Main } from './GlobalElements'

import ItemsList from './components/ItemsList';
import Wrapper from './components/Wrapper';
import Header from './components/Header';




class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Main>
            <ItemsList />
          </Main>
        </Wrapper>
      </ThemeProvider >
    );
  }
}

export default App;
