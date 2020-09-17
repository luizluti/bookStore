/* eslint-disable react/prop-types */
import React from 'react'
import {
  List,
  PupularText,
  BookContainer,
  BookInfo,
  BookTitle,
  BookCategory,
  StarsContainer,
  ImgButton,
  BookImg,
  Loading
} from './styles'
import data from '../../data'
import DownloadButton from '../DownloadButton'
import StarRating from 'react-native-star-rating'

const PopularList = (props) => {
  const handleModal = (item) => {
    props.setModalItem(item)
    props.setModalVisible(true)
  }

  const ListHeader = () => (
    <PupularText>Popular</PupularText>
  )

  const Book = ({ item }) => {
    return (
      <BookContainer>
        <ImgButton
          onPress={() => handleModal(item)}
        >
          <BookImg
            source={item.img}
          />
        </ImgButton>

        <BookInfo>
          <BookTitle>
            {item.title}
          </BookTitle>
          <BookCategory>
            {item.category.toUpperCase()}
          </BookCategory>
          <BookCategory>
            {item.ageAppropriate.toUpperCase()}
          </BookCategory>

          <StarsContainer>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item.rate}
              selectedStar={(rating) => {}}
              fullStarColor={'#F7AB21'}
              emptyStarColor={'#F7AB21'}
              starSize={22}
            />
          </StarsContainer>

          <DownloadButton />

        </BookInfo>

      </BookContainer>
    )
  }

  return (

    <List
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={<Loading />}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Book item={item}/>
      )}
    />

  )
}

export default PopularList
