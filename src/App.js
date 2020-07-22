import React, { Fragment, Component } from 'react';
import GlobalStyle from './theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { themeLight } from './theme/themeLight'
import Item from './components/Item'
import ItemsList from './components/ItemsList'



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
          <Content>
            <ItemsList />
          </Content>
        </Wrapper>
      </ThemeProvider >
    );
  }
}

export default App;
