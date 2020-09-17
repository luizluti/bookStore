import React, { useState, useRef, useEffect } from 'react'
import { Dimensions, TouchableOpacity, Alert } from 'react-native'
import { Container, Populares, SlideView, CarouselImg, Title } from './styles'
import Carousel from 'react-native-snap-carousel'
import data from '../../data'

const { width: screenWidth } = Dimensions.get('window')

export default function PopularBooksCarousel () {
  // const apiPupular = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a967f81fac3caef839b965dc2c8888b&language=pt-BR'

  useEffect(() => {
    setBooks(data)
  }, [])

  const carouselRef = useRef(null)

  const [books, setBooks] = useState([{ title: 'Carregando...' }])
  const [activeIndex, setActiveIndex] = useState(0)

  const onRenderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity onPress={() => { Alert.alert(`${item.title}`, `${item.description}`) }}>
          <CarouselImg
            source={item.img}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </>
    )
  }

  return (
    <Container>
      <Populares>Populares</Populares>
      <SlideView>
        <Carousel
          style={{ flex: 1, overflow: 'visible' }}
          ref={carouselRef}
          data={books}
          renderItem={onRenderItem}
          sliderWidth={screenWidth}
          itemWidth={200}
          inactiveSlideOpacity={0.5}
          onSnapToItem={(index) => {
            setActiveIndex(index)
          }}
        />
      </SlideView>
      <Title>{books[activeIndex].title}</Title>
    </Container>
  )
}
