import styled from 'styled-components'
import { H4 } from '../../GlobalElements'

const S = {
  ItemsList: styled.div`
  display: flex;
  flex-wrap:wrap;
  width:100%;
  height:250px;
  padding:20px;
  justify-content:space-between;
  align-content: flex-start
`,
  Item: styled.div`
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
  `,

  Title: styled(H4)`
  position:absolute;
  bottom:0px;
  margin:0;
  left:50%;
  transform:translateX(-50%);
  bottom:0px;
  width:100%;
  `,

  ImageWrapper: styled.div`
  height:250px;
  margin-bottom:50px;
  `,

  Image: styled.img`
  max-width:50%;
  max-height:50%;
  object-fit:cover;
`,

  Header: styled(H4)`
  margin:0;
  flex-basis:100%;
  padding:10px 0;
`
}

export default S;