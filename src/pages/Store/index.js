import React, { useState } from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import PopularList from '../../components/PopularList'
import BookModal from '../../components/BookModal'

const Store = () => {
  const [modalItem, setModalItem] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Container>
      <Header title='Loja' />
      <PopularList
        setModalItem={setModalItem}
        modalItem={modalItem}
        setModalVisible={setModalVisible}
      />
      <BookModal
        modalItem={modalItem}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  )
}

export default Store
