/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Alert } from 'react-native'
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
  Info,
  StarsContainer,
  MoreInfoTitle,
  MoreInfo,
  MoreInfoWrapper,
  DownloadBtnWrapper,
  PriceWrapper,
  PriceColumn,
  Moeda,
  Price,
  Debit,
  BuyButton,
  BuyText,
  LikeWrapper
} from './styles'

import ArrowSvg from '../../assets/icons/arrow.svg'
import StarRating from 'react-native-star-rating'
import DownloadButton from '../DownloadButton'
import Cart from '../../assets/icons/cart.svg'
import Like from '../../assets/icons/like.svg'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

const BookModal = (props) => {
  const [bookFavList, setBookFavList] = useState([])

  useFocusEffect(() => {
    async function getBook () {
      const data = await AsyncStorage.getItem('@books')

      if (data) {
        const list = await JSON.parse(data)
        setBookFavList(list)
      }
    }

    getBook()
  }, [])

  const handleAddBook = async (item) => {
    const data = {
      id: item.id,
      title: item.title,
      img: item.img,
      description: item.description
    }

    if (!(bookFavList.find(book => book.id === item.id))) {
      bookFavList.push(data)

      await AsyncStorage.setItem('@books', JSON.stringify(bookFavList))
    } else {
      Alert.alert('Livro Adicionado!', 'Parece que você já adicionou este Livro aos Favoritos.', [
        { text: 'FECHAR', onPress: () => {} },
        {
          text: 'EXCLUIR LIVRO DOS FAVORITOS',
          onPress: () => handleDeleteBook(item.id)
        }
      ]
      )
    }
  }

  const handleDeleteBook = async (itemId) => {
    const newList = bookFavList.filter(item => item.id !== itemId)
    await AsyncStorage.setItem('@books', JSON.stringify(newList))
    setBookFavList(newList)
  }

  return (
    <Modal
      visible={props.modalVisible}
      onBackButtonPress={() => props.setModalVisible(false)}
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
            <Info>{props.modalItem.originalTitle}</Info>

            <Title>Gênero</Title>
            <Info>{props.modalItem.category}</Info>

            <Title>Autor</Title>
            <Info>{props.modalItem.author}</Info>

            <Title>Origem</Title>
            <Info>{props.modalItem.origin}</Info>

            <StarsContainer>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={props.modalItem.rate}
                selectedStar={(rating) => {}}
                fullStarColor={'#F7AB21'}
                emptyStarColor={'#F7AB21'}
                starSize={22}
              />
            </StarsContainer>

          </TextInfoWrapper>
        </BookInfoWrapper>

        <MoreInfoWrapper>
          <MoreInfoTitle>Descrição</MoreInfoTitle>
          <MoreInfo>{props.modalItem.description}</MoreInfo>

          <MoreInfoTitle>Prévia</MoreInfoTitle>
          <MoreInfo>Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.</MoreInfo>

          <DownloadBtnWrapper>
            <DownloadButton />
          </DownloadBtnWrapper>

          <MoreInfoTitle>E-book Kindle</MoreInfoTitle>

          <PriceWrapper>
            <Moeda>R$</Moeda>
            <PriceColumn>
              <Price>{props.modalItem.price}</Price>
              <Debit>COMPRA NO DÉBITO</Debit>
            </PriceColumn>

          </PriceWrapper>

          <BuyButton onPress={() => {}}>
            <Cart height={18} fill={'#000'} style={{ marginLeft: -6 }}/>
            <BuyText>
              COMPRAR AGORA
            </BuyText>
          </BuyButton>

          <LikeWrapper
            onPress={() => handleAddBook(props.modalItem)}
          >
            <Like height={24} fill={'#F7AB21'} />
          </LikeWrapper>

        </MoreInfoWrapper>

      </BookWrapper>
    </Modal>
  )
}

export default BookModal
