import styled from 'styled-components'

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
height:80%;
z-index:5;
background-color:${props => props.theme.backgroundColor};
box-shadow:0 0 10px -5px ${props => props.theme.shadow};
`
const Image = styled.div`
flex-basis:30%;
height:70%;
background-color:green;
  img{
    max-width:100%;
    height:100%;
    object-fit:cover;
    
  }
`

const Content = styled.div`
flex-basis:70%;
background-color:red;
height:70%;
`

const Styled = {
  ModalBack,
  ModalFront,
  Image,
  Content
}

export default Styled