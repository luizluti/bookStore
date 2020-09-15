import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderWrapper, Title, Arrow } from './styles'
import ArrowSvg from '../../assets/icons/arrow.svg'

const Header = (props) => {
  const navigation = useNavigation()

  return (
    <HeaderWrapper>
      <Arrow onPress={() => navigation.goBack()}>
        <ArrowSvg height={18} fill={'#FFF'}/>
      </Arrow>
      <Title>Loja</Title>
    </HeaderWrapper>
  )
}

export default Header
