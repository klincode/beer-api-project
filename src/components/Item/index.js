import Styled from './Styled'
import React from 'react';

const Item = (props) => {
  const { image_url, name, tagline } = props.data;
  return (
    <>
      <Styled.Card>
        <Styled.ImageWrapper>
          <Styled.Image src={image_url} />
        </Styled.ImageWrapper>
        <Styled.Info>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Subtitle>{tagline}</Styled.Subtitle>
        </Styled.Info>
      </Styled.Card>
    </>
  )
}

export default Item;