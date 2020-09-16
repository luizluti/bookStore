import React from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import PopularList from '../../components/PopularList'

const Store = () => {
  return (
    <Container>
      <Header title='Loja' />
      <PopularList />
    </Container>
  )
}

export default Store
