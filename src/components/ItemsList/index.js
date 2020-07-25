import React from 'react';
import S from './Styled'
import Item from '../Item'

const ItemsList = ({ data, showModal }) => {
  return (
    <S.ItemsList>
      {data.map((item, index) => <Item key={index} data={item} showModal={showModal} />)}
    </S.ItemsList>
  )
}
export default ItemsList