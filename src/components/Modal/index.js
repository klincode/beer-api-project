import React from 'react';
import Styled from './Styled'
import SimilarItems from '../SimilarItems'
import img from '../../beer.jpg'
import { H4 } from '../../GlobalElements'
const Modal = ({ hideModal, itemData }) => {
  const { image_url, ibu, abv, ebc, name, tagline, description, food_pairing } = itemData;

  const renderFoodList = () => {
    return food_pairing.map((item, index) => {
      return <Styled.FoodItem key={index}>{item}</Styled.FoodItem>
    })
  }

  const features = {
    'ibu': ibu,
    'abv': abv,
    'ebc': ebc
  }
  console.log(itemData);
  return (
    <Styled.ModalBack onClick={(e) => hideModal(e, false)}>
      <Styled.ModalFront>
        <Styled.Image>
          <img src={image_url} alt="bee" />
        </Styled.Image>

        <Styled.Content>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Subtitle>{tagline}</Styled.Subtitle>
          <Styled.Features>
            <H4>IBU: <span>{ibu}</span></H4>
            <H4>ABV: <span>{abv}</span></H4>
            <H4>EBC: <span>{ebc}</span></H4>
          </Styled.Features>
          <Styled.Text>
            {description}
          </Styled.Text>
          <H4>Best served with</H4>
          <Styled.FoodList>
            {renderFoodList()}
          </Styled.FoodList>
        </Styled.Content>
        <SimilarItems features={features} />
      </Styled.ModalFront>
    </Styled.ModalBack>
  )
}

export default Modal