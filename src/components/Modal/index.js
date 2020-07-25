import React from 'react';
import S from './Styled'
import SimilarItems from '../SimilarItems'
import noimage from '../../img/noimage.jpg'
import { H4 } from '../../GlobalElements'
const Modal = ({ hideModal, itemData, showModal }) => {
  const { image_url, ibu, abv, ebc, name, tagline, description, food_pairing } = itemData;

  const renderFoodList = () => {
    return food_pairing.map((item, index) => {
      return <S.FoodItem key={index}>{item}</S.FoodItem>
    })
  }

  const features = {
    'ibu': ibu,
    'abv': abv,
    'ebc': ebc
  }
  console.log(itemData);
  return (
    <S.ModalBack onClick={(e) => hideModal(e)}>
      <S.ModalFront>
        <S.ImageWrapper>
          <S.Image src={image_url || noimage} alt="bee" />
        </S.ImageWrapper>

        <S.Content>
          <S.Title>{name}</S.Title>
          <S.Subtitle>{tagline}</S.Subtitle>
          <S.Features>
            <H4>IBU: <span>{ibu}</span></H4>
            <H4>ABV: <span>{abv}</span></H4>
            <H4>EBC: <span>{ebc}</span></H4>
          </S.Features>
          <S.Text>
            {description}
          </S.Text>
          <H4>Best served with</H4>
          <S.FoodList>
            {renderFoodList()}
          </S.FoodList>
        </S.Content>
        <SimilarItems
          features={features}
          showModal={showModal} />
      </S.ModalFront>
    </S.ModalBack>
  )
}

export default Modal