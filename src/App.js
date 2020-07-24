import React, { Fragment, Component } from 'react';
import GlobalStyle from './theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { themeLight } from './theme/themeLight';

import { Main } from './GlobalElements'

import ItemsList from './components/ItemsList';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Modal from './components/Modal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      itemData: {},
      beers: []
    }
  }
  componentDidMount() {
    this.getData(10);
  }

  setSelectedItemData = (data) => {
    this.setState({ itemData: data });
  }

  showModal = (data) => {
    this.setState({ isModalVisible: true })
    this.setSelectedItemData(data);
  }

  hideModal = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      this.setState({ isModalVisible: false })
    }
  }
  getData = (page) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
      .then(response => response.json())
      .then(data => this.setState({ beers: data }))
  }
  render() {
    const { beers, isModalVisible, itemData } = this.state;


    return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Wrapper>
          {isModalVisible ? <Modal hideModal={this.hideModal} itemData={itemData} /> : null}
          <Header />
          <Main>
            <ItemsList data={beers}
              showModal={this.showModal} />
          </Main>
        </Wrapper>
      </ThemeProvider >
    );
  }
}

export default App;
