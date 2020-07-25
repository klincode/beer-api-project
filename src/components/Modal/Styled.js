import styled from 'styled-components'
import { H2, H3, H4, HeadLine } from '../../GlobalElements'

const S = {
  ModalBack: styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  z-index:5;
  background-color:rgba(30,30,30,0.9)
`,
  ModalFront: styled.div`
  display:flex;
  flex-wrap:wrap;
  border-radius:5px;
  padding:20px 20px 20px 0;
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  max-width:70%;
  min-width:400px;
  min-height:80%;
  z-index:5;
  background-color:#fff;
  box-shadow:0 0 10px -5px ${props => props.theme.shadow};
  align-content:space-between;
`,
  ImageWrapper: styled.div`
  flex-basis:30%;
  height:350px;
`,
  Image: styled.img`
  max-width:90%;
  max-height:100%;
  object-fit:cover;
  margin:0 auto;
  display:block;
`,
  Content: styled.div`
  flex-basis:70%;
  min-height:80%;
`,
  Title: styled(H2)`
`,
  Subtitle: styled(H3)`
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
`,
  Features: styled.div`
  margin-top:15px;
  display:flex;
  align-items:center;
  width:50%;
  justify-content:space-between;
    span {
      font-weight:400;
  }
`,
  Text: styled.p`
  margin:0;
  padding-bottom:10px;
`,
  FoodList: styled.ul`
  list-style:none;
  margin:0;
  padding:0;
`,
  FoodItem: styled.li`
  &::before{
  content:' - '
  }
`
}

export default S