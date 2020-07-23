import styled from 'styled-components'
import { H2, H3, H4, HeadLine } from '../../GlobalElements'
const ModalBack = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100vh;
z-index:5;
background-color:rgba(30,30,30,0.9)
`
const ModalFront = styled.div`
display:flex;
flex-wrap:wrap;
border-radius:5px;
padding:20px;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:60%;
max-width:800px;
min-height:90%;
z-index:5;
background-color:#fff;
box-shadow:0 0 10px -5px ${props => props.theme.shadow};
align-content:space-between;
`
const Image = styled.div`
flex-basis:30%;
height:330px;;
background-color:green;
  img{
    
    max-width:100%;
    height:100%;
    object-fit:cover;
    
  }
`

const Content = styled.div`
flex-basis:70%;
min-height:80%;
/* background-color:red; */
`
const Title = styled(H2)`

`
const Subtitle = styled(H3)`
position:relative;
display:inline-block;

&::before {
  content:"";
  position:absolute;
  left:0; 
  top:100%;
  margin:10px auto;
  width:50%;
  height:5px;
  background:${props => props.theme.primaryColor};
}
`
const Volumes = styled.div`
margin-top:15px;
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
span {
  font-weight:400;
}
`
const Text = styled.p`
margin:0;
padding-bottom:10px;
`

const FoodList = styled.ul`
list-style:none;
margin:0;
padding:0;
`
const FoodItem = styled.li`
&::before{
content:' - '
}
`

const Styled = {
  ModalBack,
  ModalFront,
  Image,
  Content,
  Title,
  Subtitle,
  Volumes,
  Text,
  FoodList,
  FoodItem
}

export default Styled