import styled from 'styled-components'
import { H4 } from '../../GlobalElements'

// const Container = styled.section`
// margin:0;
// padding:0;
// width:100%;
// border:1px solid red;
// height:30%;
// background-color:violet;
// `

const ItemsList = styled.div`
display: flex;
background-color:pink;
flex-wrap:wrap;
width:100%;
height:25%;
justify-content:space-between;
 
`

const Item = styled.div`
 /* flex: 1 0 100%; */
  /* height:100%; */
  
  position:relative;
  text-align:center;
  padding:10px;
  max-height:100%;
  margin:0;
  flex-basis:30%;
  text-align:center;
  border:1px solid #d9d9d9;
  background-color:${props => props.theme.backgroundItemColor};
`
const Title = styled(H4)`
  position:absolute;
  bottom:0px;
  margin:0;
  left:50%;
  transform:translateX(-50%);
  bottom:10px;
`
const Header = styled(H4)`
margin:0;
/* padding:10px; */
flex-basis:100%;
/* height:0px; */
/* width:100%; */
border:1px solid red;
line-height:1;
`
const Styled = {
  Item,
  ItemsList,
  Title,
  Header,

}


export default Styled;