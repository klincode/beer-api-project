import styled from 'styled-components'
import React from 'react';
import Loader from 'react-loader-spinner'
import Styled from './Styled'
const Spinner = () => {
  return (
    <Styled.Spinner>
      <Loader
        type="ThreeDots"
        color="#fdc22a"
        height={70}
        width={70}
      // timeout={3000} //3 secs
      />
    </Styled.Spinner>
  )
}

export default Spinner