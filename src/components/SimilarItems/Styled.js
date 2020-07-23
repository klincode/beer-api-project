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
height:200px;
/* margin:0 auto; */
justify-content:space-between;
align-content: flex-start
`

const Item = styled.div`
 /* flex: 1 0 100%; */
  height:90%;
  /* min-height:175px; */

  position:relative;
  text-align:center;
  padding:10px;
  margin:0;
  flex-basis:25%;
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
height:20px;
/* width:100%; */
/* border:1px solid red; */
background-color:pink;
/* line-height:1; */
`
const Styled = {
  Item,
  ItemsList,
  Title,
  Header,

}


export default Styled;