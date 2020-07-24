import Styled from './Styled'
import React from 'react';
import noimage from '../../img/noimage.jpg'
const Item = (props) => {
  const { data: { image_url, name, tagline }, showModal } = props;
  return (
    <>
      <Styled.Item onClick={() => showModal(props.data)}>
        <Styled.ImageWrapper>
          <Styled.Image src={image_url || noimage} />
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