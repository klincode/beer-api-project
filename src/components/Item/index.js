import React from 'react';
import S from './Styled'
import noimage from '../../img/noimage.jpg'

const Item = (props) => {
  const { data: { image_url, name, tagline }, showModal } = props;
  return (
    <S.Item onClick={() => showModal(props.data)}>
      <S.ImageWrapper>
        <S.Image src={image_url || noimage} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{name}</S.Title>
        <S.Subtitle>{tagline}</S.Subtitle>
      </S.Info>
    </S.Item>
  )
}

export default Item;