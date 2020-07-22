import React from 'react';
import Styled from './Styled'
import { SpanColor, H1 } from '../../GlobalElements'

const Header = () => {
  return (
    <Styled.Header>
      <H1>
        <SpanColor>Beer</SpanColor>
        Guru
      </H1>
    </Styled.Header>
  )
}

export default Header;