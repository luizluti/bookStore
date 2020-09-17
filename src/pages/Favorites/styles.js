import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const FlatList = styled.FlatList``

export const BookContainer = styled.View`
  align-items: center;
  padding: 20px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Rubik-Bold';
  color: #F7AB21;
  margin-bottom: 24px;
`

export const BookImg = styled.Image`

`

export const Description = styled.Text`
  font-family: 'Rubik-Regular';
  margin: 10px;
`

export const DeleteBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #F7AB21;
  border-radius: 25px;
  flex-direction: row;
  /* align-self: center; */
  justify-content: center;
  align-items: center;
`

export const DeleteText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
  color: #F7AB21;
  align-self: center;
  margin-left: -10px;
`

export const HR = styled.View`
  width: 100%;
  border: 1px solid #CCC;
  margin-top: 10px;
`
