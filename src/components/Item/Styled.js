import styled from 'styled-components';

const Image = styled.img`
max-width:90%;
`;
const Info = styled.p`
position:absolute;
bottom:10px;
left:50%;
transform:translateX(-50%);
width:100%;
`
const Title = styled.h2`
color: ${props => props.theme.primaryColor};
margin:0;
padding:0;
`

const Subtitle = styled.p`
font-size:13px;
color: ${props => props.theme.textColor};
margin:0;
padding:0;
`;


const Card = styled.div`
  position:relative;
  flex-basis:30%;
  border-radius:5px;
  min-height:350px;
  padding:10px 20px;
  margin-bottom:30px;
  text-align:center;
  box-shadow:0 0 9px -4px ${props => props.theme.shadow};
  background-color:${props => props.theme.backgroundItemColor};
  transition:0.3s;
  &:hover{
    box-shadow:0 0 9px -2px ${props => props.theme.shadow};
    transform:scale(1.05)
  }
`


const Styled = {
  Image, Subtitle, Title, Card, Info
}

export default Styled;