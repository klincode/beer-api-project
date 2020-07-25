import React from 'react';
import Loader from 'react-loader-spinner'
import S from './Styled'
const Spinner = () => {
  return (
    <S.Spinner>
      <Loader
        type="ThreeDots"
        color="#fdc22a"
        height={70}
        width={70}
      />
    </S.Spinner>
  )
}

export default Spinner