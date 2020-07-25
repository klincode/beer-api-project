import React, { Fragment, Component } from 'react';
import GlobalStyle from './theme/GlobalStyle'
import { ThemeProvider } from 'styled-components';
import Switch from "react-switch";
import { themeLight, themeDark } from './theme/Themes';
import { Main, H3 } from './globalElements';
import ItemsList from './components/ItemsList';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import Footer from './components/Footer';
import SwitchControl from './components/Switch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themeLight,
      switchChecked: false,
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
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  switchHandleChange = (e) => {
    let theme = '';
    e ? theme = themeDark : theme = themeLight
    this.setState({ switchChecked: !this.state.switchChecked, theme });
  }
  setSelectedItemData = (data) => {
    this.setState({ itemData: data });
  }
  infiniteScroll = () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if ((scroll / height) === 1) {
      this.setState(prevState => {
        return (
          { page: prevState.page++ }
        )
      })
      this.getData(this.state.page)
    }
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
    const { beers, isModalVisible, itemData, isEndOfData, isLoading } = this.state;
    return (
      <ThemeProvider
        theme={this.state.theme}>
        <GlobalStyle />
        <SwitchControl>
          <Switch
            onChange={this.switchHandleChange}
            checked={this.state.switchChecked}
            offColor="#0d1e20"
            onColor="#f5555f" />
        </SwitchControl>
        <Wrapper>
          {isModalVisible ?
            <Modal
              hideModal={this.hideModal}
              itemData={itemData}
              showModal={this.showModal} />
            : null}
          <Header />
          <Main>
            <ItemsList
              data={beers}
              showModal={this.showModal} />
            {isLoading ? <Spinner /> : null}
          </Main>
        </Wrapper>
        {isEndOfData ?
          <>
            <H3 center>koniec...</H3>
            <Footer />
          </>
          : null}
      </ThemeProvider >
    );
  }
}

export default App;