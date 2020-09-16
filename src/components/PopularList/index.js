/* eslint-disable react/prop-types */
import React from 'react'
import {
  List,
  PupularText,
  BookContainer,
  BookInfo,
  BookTitle,
  BookCategory,
  BookImg
} from './styles'
import data from './data'

const PopularList = () => {
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
      </BookInfo>
    </BookContainer>
  )

  return (

    <List>
      <PupularText>Popular</PupularText>
      {data.map((item) => (
        <Book key={item.id.toString()} item={item} />
      ))}
    </List>

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
