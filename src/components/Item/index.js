import Styled from './Styled'
import React from 'react';
import img from '../../beer.jpg'
const Item = () => {
  return (
    <>
      <Styled.Card>
        <Styled.Image src={img} />
        <Styled.Info>
          <Styled.Title>Buzz</Styled.Title>
          <Styled.Subtitle>A real bitter experience</Styled.Subtitle>
        </Styled.Info>
      </Styled.Card>
    </>
  )
}

export default Item;