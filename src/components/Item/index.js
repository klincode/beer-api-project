import Styled from './Styled'
import React from 'react';

const Item = (props) => {
  const { image_url, name, tagline } = props.data;
  return (
    <>
      <Styled.Item>
        <Styled.ImageWrapper>
          <Styled.Image src={image_url} />
        </Styled.ImageWrapper>
        <Styled.Info>
          <Styled.Title primary>{name}</Styled.Title>
          <Styled.Subtitle>{tagline}</Styled.Subtitle>
        </Styled.Info>
      </Styled.Item>
    </>
  )
}

export default Item;