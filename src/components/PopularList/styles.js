import styled from 'styled-components/native'

export const List = styled.ScrollView`
  padding: 24px;
`

export const PupularText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: 'Rubik-Bold';
  color: #F7AB21;
  margin-bottom: 24px;
`

export const BookContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #CCC;
  margin-bottom: 10px;
  border-radius: 4px;
  /* padding: 10px; */
`
export const BookInfo = styled.View`
  flex-direction: column;
  padding: 10px;
`

export const BookImg = styled.Image`
  height: 210px;
  width: 140px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
export const BookTitle = styled.Text`
  width: 200px;
  font-family: 'Rubik-Medium';
  margin-top: 16px;
  margin-bottom: 10px;
`
export const BookCategory = styled.Text`
  font-family: 'Rubik-Regular';
`
// export const BookAgeAppropriate = styled.te
