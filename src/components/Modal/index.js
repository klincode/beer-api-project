import React from 'react';
import Styled from './Styled'
import SimilarItems from '../SimilarItems'
import img from '../../beer.jpg'
import { H4 } from '../../GlobalElements'
const Modal = () => {
  return (
    <Styled.ModalBack>
      <Styled.ModalFront>
        <Styled.Image>
          <img src={img} alt="bee" />
        </Styled.Image>

        <Styled.Content>
          <Styled.Title>trashy blonde</Styled.Title>
          <Styled.Subtitle>rtret df dfg dfg df g </Styled.Subtitle>
          <Styled.Volumes>
            <H4>IBU: <span> 34.1</span></H4>
            <H4>ABV: <span> 4%</span></H4>
            <H4>EBC: <span> 15</span></H4>
          </Styled.Volumes>
          <Styled.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non asperiores omnis architecto aperiam, minus ad labore! Exercitationem eum voluptate quae accusantium tempore, nostrum sunt, aut quasi fugit dolorum perferendis consectetur error placeat vero, facere quisquam at unde aliquid dicta cupiditate nemo a. Quis architecto inventore temporibus odio laborum voluptate?
          </Styled.Text>
          <H4>Best served with</H4>
          <Styled.FoodList>
            <Styled.FoodItem>ryba</Styled.FoodItem>
            <Styled.FoodItem>czipsy</Styled.FoodItem>
            <Styled.FoodItem>salami</Styled.FoodItem>
            <Styled.FoodItem>salami</Styled.FoodItem>
            <Styled.FoodItem>salami</Styled.FoodItem>
            <Styled.FoodItem>salami</Styled.FoodItem>

          </Styled.FoodList>
        </Styled.Content>
        <SimilarItems />
      </Styled.ModalFront>
    </Styled.ModalBack>
  )
}

export default Modal