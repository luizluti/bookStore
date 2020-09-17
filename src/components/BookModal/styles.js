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
  width: 160px;
  font-family: 'Rubik-Regular';
`

export const StarsContainer = styled.View`
  width: 120px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const MoreInfoWrapper = styled.View`
  margin-bottom: 48px;
`

export const MoreInfoTitle = styled.Text`
  font-family: 'Rubik-Bold';
  margin-top: 40px;
  margin-bottom: 10px;
`

export const MoreInfo = styled.Text`
  font-family: 'Rubik-Regular';
`

export const DownloadBtnWrapper = styled.View`
  align-items: center;
  margin-top: 40px;
`

export const PriceWrapper = styled.View`
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  border-radius: 4px;
  flex-direction: row;
`

export const PriceColumn = styled.View`
  align-items: center;
  justify-content: center;
`

export const Moeda = styled.Text`
  font-family: 'Rubik-Bold';
  font-size: 12px;
  margin-right: 10px;
  margin-left: -26px;
`

export const Price = styled.Text`
  font-family: 'Rubik-Bold';
  font-size: 28px;
`

export const Debit = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 10px;
`

export const BuyButton = styled.TouchableOpacity`
  width: 200px;
  background-color: #F7AB21;
  border-radius: 18px;
  align-self: center;
  margin-top: -18px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BuyText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
  line-height: 36px;
  text-align: center;
`

export const LikeWrapper = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  align-self: flex-end;
`
