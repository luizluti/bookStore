/* eslint-disable react/prop-types */
import React from 'react'
import {
  HeaderWrapper,
  HeaderTitle,
  Arrow,
  Modal,
  BookWrapper,
  BookTitle,
  BookInfoWrapper,
  BookImg,
  TextInfoWrapper,
  Title,
  Info
} from './styles'

import ArrowSvg from '../../assets/icons/arrow.svg'
import { Text } from 'react-native'

const BookModal = (props) => {
  return (
    <Modal
      visible={props.modalVisible}
    >
      <HeaderWrapper>
        <Arrow onPress={() => props.setModalVisible(false)}>
          <ArrowSvg height={18} fill={'#FFF'}/>
        </Arrow>
        <HeaderTitle>Loja</HeaderTitle>
      </HeaderWrapper>

      <BookWrapper>
        <BookTitle>{props.modalItem.title}</BookTitle>

        <BookInfoWrapper>
          <BookImg
            source={props.modalItem.img}
          />
          <TextInfoWrapper>
            <Title>Título original</Title>
            <Info>{props.modalItem.originalTitle.toUpperCase()}</Info>

            <Title>Gênero</Title>
            <Info>{props.modalItem.category.toUpperCase()}</Info>

            <Title>Autor</Title>
            <Info>{props.modalItem.author.toUpperCase()}</Info>

            <Title>Origem</Title>
            <Info>{props.modalItem.origin.toUpperCase()}</Info>

          </TextInfoWrapper>
        </BookInfoWrapper>
      </BookWrapper>
    </Modal>
  )
}

export default BookModal
