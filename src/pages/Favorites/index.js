import React, { useState } from 'react'
import Header from '../../components/Header'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { Container, FlatList, BookContainer, Title, BookImg, Description, DeleteBtn, DeleteText, HR } from './styles'

const Favorites = () => {
  const [books, setBooks] = useState([])

  useFocusEffect(() => {
    async function getBook () {
      const data = await AsyncStorage.getItem('@books')
      const book = await JSON.parse(data)
      setBooks(book)
    }

    getBook()
  }, [])

  const handleDeleteBook = async (itemId) => {
    const newList = books.filter(item => item.id !== itemId)
    await AsyncStorage.setItem('@books', JSON.stringify(newList))
    setBooks(newList)
  }

  return (
    <Container>
      <Header title='Favoritos' />

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookContainer>
            <Title>{item.title}</Title>
            <BookImg
              source={item.img}
            />
            <Description>{item.description}</Description>
            <DeleteBtn
              onPress={() => handleDeleteBook(item.id)}
            >
              <DeleteText>
                Excluir
              </DeleteText>
            </DeleteBtn>
            <HR/>
          </BookContainer>
        )}
      />
    </Container>
  )
}

export default Favorites
