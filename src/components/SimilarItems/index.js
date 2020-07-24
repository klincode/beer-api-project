import React, { Fragment, Component } from 'react';
import Styled from './Styled'
import Spinner from '../Spinner'
import noimage from '../../img/noimage.jpg'

class SimilarItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      beers: []
    }
  }
  componentDidMount() {
    this.getData();

  }
  getData = () => {
    const { abv, ibu, ebc } = this.props.features;
    console.log(abv);
    const radius = 1;
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${abv}&abv_lt=${abv + radius}&per_page=3`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ beers: data, isLoading: true }))
  }

  renderBeers = () => {
    const { beers } = this.state;
    return beers.map((item, index) => {
      return (
        <Styled.Item key={index} onClick={() => this.props.showModal(this.state.beers[index])}>
          <Styled.Title>{item.name}</Styled.Title>
          <Styled.ImageWrapper>
            <Styled.Image src={item.image_url || noimage} />

          </Styled.ImageWrapper>
        </Styled.Item>
      )
    })
  }

  render() {
    const { beers, isLoading } = this.state;

    return (
      <>

        <Styled.ItemsList>
          <Styled.Header>You might also like:</Styled.Header>
          {isLoading ? this.renderBeers() : <Spinner />}
        </Styled.ItemsList>
      </>
    )
  }
}

export default SimilarItems