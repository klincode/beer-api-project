import React, { Fragment, Component } from 'react';
import GlobalStyle from './theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { themeLight } from './theme/themeLight';

import { Main, H3 } from './GlobalElements'

import ItemsList from './components/ItemsList';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      scrollPosition: 0,
      isEndOfData: false,
      isLoading: true,
      isModalVisible: false,
      itemData: {},
      beers: []
    }
  }
  componentDidMount() {
    this.getData(this.state.page);
    window.addEventListener('scroll', this.infiniteScroll)
  }

  setSelectedItemData = (data) => {
    this.setState({ itemData: data });
  }

  showModal = (data) => {
    this.setState({ isModalVisible: true })
    this.setSelectedItemData(data);
  }

  infiniteScroll = () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if ((scroll / height) === 1) {
      this.setState(prevState => {
        return (
          { page: prevState.page++ }
        )
      })
      this.getData(this.state.page)

    }
    this.setState({ scrollPosition: scroll / height })
    console.log('page' + this.state.page);
  }

  hideModal = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      this.setState({ isModalVisible: false })
    }
  }
  getData = (page) => {
    this.setState({ isLoading: true }, () => {
      fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => {
            return (
              {
                beers: [...prevState.beers, ...data], isLoading: false
              }
            )
          }
          );
          if (data.length === 0) this.setState({ isEndOfData: true });
        })
    })

  }
  render() {
    const { beers, isModalVisible, itemData, isEndOfData } = this.state;

    console.log(this.state.scrollPosition);
    return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Wrapper>
          {isModalVisible ?
            <Modal
              hideModal={this.hideModal}
              itemData={itemData}
              showModal={this.showModal} />
            : null}
          <Header />
          <Main>
            {beers ?
              <ItemsList data={beers}
                showModal={this.showModal} />
              : <Spinner />}
          </Main>
        </Wrapper>
        {isEndOfData ?
          <>
            <H3 center>koniec</H3>
            <Footer />
          </>
          : null}

      </ThemeProvider >
    );
  }
}

export default App;
