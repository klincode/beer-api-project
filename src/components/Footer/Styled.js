import styled from 'styled-components'

const S = {
  Footer: styled.footer`
  width:100%;
  background-color:${props => props.theme.primaryColor};
  text-align:center;
  height:50px;
  padding:20px;
    span {
      font-size:15px;
      color:${props => props.theme.secondatyColor};
    }
`
}

export default S;