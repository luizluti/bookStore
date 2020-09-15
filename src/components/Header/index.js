import React from 'react'
import { HeaderWrapper, Title, Seta } from './styles'
import Arrow from '../../assets/icons/arrow.svg'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Seta onPress={() => {}}>
        <Arrow height={18} fill={'#FFF'}/>
      </Seta>
      <Title>Loja</Title>
    </HeaderWrapper>
  )
}

export default Header
