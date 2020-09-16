/* eslint-disable react/prop-types */
import React from 'react'
import {
  HeaderWrapper,
  Title,
  Arrow,
  Modal
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
        <Title>Loja</Title>
      </HeaderWrapper>
      <Text>{props.modalItem.title}</Text>
    </Modal>
  )
}

export default BookModal
