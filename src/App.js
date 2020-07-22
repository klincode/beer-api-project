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
    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    this.getData(1);
  }
  getData = (page) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
      .then(response => response.json())
      .then(data => this.setState({ beers: data }))
  }
  render() {
    const { beers } = this.state;
    return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Main>
            <ItemsList data={beers} />
          </Main>
        </Wrapper>
      </ThemeProvider >
    );
  }
}

export default App;
