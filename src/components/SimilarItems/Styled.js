import styled from 'styled-components'
import { H4 } from '../../GlobalElements'


const ItemsList = styled.div`
display: flex;
flex-wrap:wrap;
width:100%;
height:250px;
padding:20px;
/* margin:0 auto; */
justify-content:space-between;
align-content: flex-start

`

const Item = styled.div`
 /* flex: 1 0 100%; */
  height:90%;
  min-height:175px;
  position:relative;
  text-align:center;
  padding:20px;
  margin:0;
  flex-basis:31%;
  text-align:center;
  border:1px solid #d9d9d9;
  background-color:${props => props.theme.backgroundItemColor};
  transition:0.3s;
  &:hover {
    transform:scale(1.1);
    cursor:pointer;
  }
`
const Title = styled(H4)`
  position:absolute;
  bottom:0px;
  margin:0;
  left:50%;
  transform:translateX(-50%);
  bottom:10px;
  width:100%;
`
const Image = styled.div`

  height:250px;
  img {
    max-width:50%;
    max-height:50%;
    object-fit:cover;
  }
`
const Header = styled(H4)`
margin:0;
flex-basis:100%;
padding:10px 0;
/* height:20px; */

`
const Styled = {
  Item,
  ItemsList,
  Title,
  Header,
  Image

}


export default Styled;