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
  DownloadBtn,
  DownloadBtnText,
  BookImg,
  Loading
} from './styles'
import data from './data'
import DownloadSvg from '../../assets/icons/download.svg'
import StarRating from 'react-native-star-rating'

const PopularList = () => {
  const ListHeader = () => (
    <PupularText>Popular</PupularText>
  )

  const Book = ({ item }) => (
    <BookContainer>
      <BookImg
        source={item.img}
      />
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

        <DownloadBtn
          onPress={() => {}}
        >
          <DownloadSvg height={16} fill={'#F7AB21'} style={{ marginLeft: -6 }} />
          <DownloadBtnText>
            DOWNLOAD PRÉVIA
          </DownloadBtnText>
        </DownloadBtn>

      </BookInfo>
    </BookContainer>
  )

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

  // <List>
  //   <PupularText>Popular</PupularText>
  //   {data.map((item) => (
  //     <Book key={item.id.toString()} item={item} />
  //   ))}
  // </List>

  // <ListWrapper>
  //   <List
  //     data={data}
  //     keyExtractor={(item) => item.id.toString()}
  //     renderItem={({ item }) => (
  //       <>
  //         <BookTitle>{item.title}</BookTitle>
  //         <BookImg
  //           source={item.source}
  //         />
  //       </>
  //     )}
  //   />
  // </ListWrapper>

  )
}

export default PopularList
