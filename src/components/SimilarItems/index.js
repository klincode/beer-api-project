import React, { Fragment, Component } from 'react';
import Styled from './Styled'

class SimilarItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    this.getData();

  }
  getData = () => {
    const { abv, ibu, ebc } = this.props.features;
    console.log(abv);
    const radius = 3;
    const url = `https://api.punkapi.com/v2/beers?
    abv_gt=${abv - radius}&
    abv_lt=${abv + radius}&
    ibu_gt=${ibu - radius}&
    ibu_lt=${ibu + radius}&
    ebu-gt=${ebc - radius}&
    ebu_lt=${ebc + radius}&page=2&per_page=3
  `;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ beers: data }))
  }



  render() {
    const { beers } = this.state;
    console.log(beers);
    const sort = beers.sort(() => Math.random() - 0.5);
    console.log('sort');
    console.log(sort);
    return (
      <>
        <Styled.ItemsList>
          <Styled.Header>You might also like:</Styled.Header>
          {beers ? beers.map((item, index) => {
            return (
              <Styled.Item key={index}>
                <Styled.Title>{item.name}</Styled.Title>
                <Styled.Image>
                  <img src={item.image_url} alt="" />
                </Styled.Image>
              </Styled.Item>
            )
          }) : 'dd'}
        </Styled.ItemsList>
      </>
    )
  }
}

export default SimilarItems