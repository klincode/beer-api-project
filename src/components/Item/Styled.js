import styled from 'styled-components';
import { breakPoint } from '../../theme/breakPoints'
import { H2, H3 } from '../../GlobalElements'

const S = {
  ImageWrapper: styled.div`
  padding:5px;
  height:250px;
  @media ${breakPoint.mediumDevice} {
    height:350px;
  }
  `,
  Image: styled.img`
max-width:100%;
height:100%;
object-fit:cover;
`,
  Info: styled.div`
position:absolute;
bottom:10px;
left:50%;
transform:translateX(-50%);
width:100%;
`,
  Title: styled(H2)`
`,
  Subtitle: styled(H3)`
`,
  Item: styled.div`
  position:relative;
  flex-basis:30%;
  border-radius:5px;
  min-height:380px;
  padding:10px 20px;
  margin-bottom:30px;
  text-align:center;
  box-shadow:0 0 9px -4px ${props => props.theme.shadow};
  background-color:${props => props.theme.backgroundItemColor};
  transition:0.3s;
  &:hover{
    cursor:pointer;
    box-shadow:0 0 9px -2px ${props => props.theme.shadow};
    transform:scale(1.05)
  }

  @media ${breakPoint.mediumDevice} {
    width:100%;
    min-height:450px;
  }
`
}


// const Styled = {
//   Image, Subtitle, Title, Item, Info, ImageWrapper
// }

export default S;