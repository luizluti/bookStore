import styled from 'styled-components/native'

export const List = styled.FlatList`
  padding: 24px;
`

export const PupularText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Rubik-Bold';
  color: #F7AB21;
  margin-bottom: 24px;
`

export const BookContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #F4F4F4;
  margin-bottom: 10px;
  border-radius: 4px;
  /* padding: 10px; */
`
export const BookInfo = styled.View`
  flex-direction: column;
  padding: 10px;
`

export const ImgButton = styled.TouchableOpacity``

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
export const StarsContainer = styled.View`
  width: 120px;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const DownloadBtn = styled.TouchableOpacity`
  padding: 10px;
  border: 2px solid #F7AB21;
  border-radius: 25px;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
`
export const DownloadBtnText = styled.Text`
  font-family: 'Rubik-Regular';
  color: #F7AB21;
  align-self: center;
`
export const Loading = styled.ActivityIndicator.attrs({
  size: 40,
  color: '#F7AB21'
})`
  margin: 20px;
  margin-bottom: 40px;
`
