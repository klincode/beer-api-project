import Styled from './Styled'
import React from 'react';
import img from '../../beer.jpg'
const Item = () => {
  return (
    <>
      <Styled.Card>
        <Styled.ImageWrapper>
          <Styled.Image src={img} />
        </Styled.ImageWrapper>
        <Styled.Info>
          <Styled.Title>Buzz</Styled.Title>
          <Styled.Subtitle>A real bitter experience</Styled.Subtitle>
        </Styled.Info>
      </Styled.Card>
    </>
  )
}

export default Item;