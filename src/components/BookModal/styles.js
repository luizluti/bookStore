import styled from 'styled-components/native'

export const Modal = styled.Modal`

`
export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 20px;
  position: relative;
`

export const Arrow = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`

export const HeaderTitle = styled.Text`
  justify-content: center;
  font-size: 18px;
  font-family: 'Rubik-Regular';
  color: #FFF;
`

export const BookTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Rubik-Bold';
  color: #F7AB21;
  margin-bottom: 24px;
`

export const BookWrapper = styled.ScrollView`
  flex: 1;
  padding: 24px;
`

export const BookInfoWrapper = styled.View`
  flex-direction: row;
`

export const BookImg = styled.Image`
  height: 210px;
  width: 140px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const TextInfoWrapper = styled.View`
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`

export const Title = styled.Text`
  font-family: 'Rubik-Bold';
`

export const Info = styled.Text`
  width: 200px;
  font-family: 'Rubik-Regular';
`
