import styled from 'styled-components'
import Item from '../Item'

const ItemsList = styled.div`
display: flex;
flex-wrap:wrap;
`

const ItemsList = () => {
  return (
    <ItemsList>
      <Item>
        <Item.Image src={img} />
        <Item.Title>Tytuł</Item.Title>
        <Item.Subtitle>podtytuł</Item.Subtitle>
      </Item>
      <Item>
        <Item.Image src={img} />
        <Item.Title>Tytuł</Item.Title>
        <Item.Subtitle>podtytuł</Item.Subtitle>
      </Item>

      <Item>
        <Item.Image src={img} />
        <Item.Title>Tytuł</Item.Title>
        <Item.Subtitle>podtytuł</Item.Subtitle>
      </Item>
    </ItemsList>
  )
}
export default ItemsList