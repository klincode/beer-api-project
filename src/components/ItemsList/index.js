import Item from '../Item'
import Styled from './Styled'
import React from 'react';


const ItemsList = ({ data, showModal }) => {
  return (
    <Styled.ItemsList>
      {data.map((item, index) => {
        return <Item key={index} data={item} showModal={showModal} />
      })}
    </Styled.ItemsList>
  )
}
export default ItemsList