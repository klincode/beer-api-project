import styled from 'styled-components';

export const H2 = styled.h2`
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  margin: 0;
  padding: 0;
`;
