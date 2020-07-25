import React, { Fragment, Component } from 'react';
import S from './Styled'
import Spinner from '../Spinner'
import noimage from '../../img/noimage.jpg'

class SimilarItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      beers: []
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const { abv } = this.props.features;
    const radius = 1;
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${abv}&abv_lt=${abv + radius}&per_page=3`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ beers: data, isLoading: false }))
  }

  renderBeers = () => {
    const { beers } = this.state;
    if (beers.length > 0) {

      return beers.map((item, index) => {
        return (
          <S.Item key={index} onClick={() => this.props.showModal(this.state.beers[index])}>
            <S.Title>{item.name}</S.Title>
            <S.ImageWrapper>
              <S.Image src={item.image_url || noimage} />
            </S.ImageWrapper>
          </S.Item>
        )
      })
    } else return 'No similar beers found...'
  }

  render() {
    const { isLoading } = this.state;
    return (

      <S.ItemsList>
        <S.Header>You might also like:</S.Header>
        {isLoading ? <Spinner /> : this.renderBeers()}
      </S.ItemsList>
    )
  }
}

export default SimilarItems