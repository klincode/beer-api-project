import React from 'react';
import Styled from './Styled'
import SimilarItems from '../SimilarItems'
const Modal = () => {
  return (
    <Styled.ModalBack>
      <Styled.ModalFront>
        <Styled.Image />
        <Styled.Content />
        <SimilarItems />
      </Styled.ModalFront>
    </Styled.ModalBack>
  )
}

export default Modal