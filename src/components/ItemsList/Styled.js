import styled from 'styled-components';
import { breakPoint } from '../../theme/breakPoints'
const ItemsList = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-between;

@media ${breakPoint.mediumDevice}{
  flex-direction:column;
}
`;


const Styled = {
  ItemsList
}
export default Styled;