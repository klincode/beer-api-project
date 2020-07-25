import React from 'react';
import S from './Styled'
import { SpanColor, H1 } from '../../GlobalElements'

const Header = () => {
  return (
    <S.Header>
      <H1>
        <SpanColor>Beer</SpanColor>Guru
      </H1>
    </S.Header>
  )
}

export default Header;