import styled, { css } from 'styled-components';

export const H3 = styled.h3`
  font-size:13px;
  color: ${props => props.theme.textColor};
  margin:0;
  padding:0;
  font-weight:400;
  ${props => props.center &&
    css`
    font-weight:bold;
    letter-spacing:2px;
    text-transform:uppercase;
    padding:20px;
    width:100%;
    text-align:center
  `}
`;

