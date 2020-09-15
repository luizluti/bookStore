import React from 'react'
import { Container, PopularWrapper, PopularText } from './styles'
import Header from '../../components/Header'

const Store = () => {
  return (
    <Container>
      <Header title='Loja' />
      <PopularWrapper>
        <PopularText>Popular</PopularText>
      </PopularWrapper>
    </Container>
  )
}

export default Store
