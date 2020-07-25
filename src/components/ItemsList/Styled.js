import styled from 'styled-components';
import { breakPoints } from '../../GlobalElements/'

const S = {
  ItemsList: styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;

    @media ${breakPoints.mediumDevice}{
      flex-direction:column;
    }
`
}

export default S;