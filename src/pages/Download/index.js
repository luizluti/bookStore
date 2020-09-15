import React from 'react'
import { Container, TextWrapper, DownloadText } from './styles'
import DownloadSvg from '../../assets/icons/download.svg'

const Download = () => {
  return (
    <Container>
      <TextWrapper>
        <DownloadSvg height={36} fill={'#000'} />
        <DownloadText>Download</DownloadText>
      </TextWrapper>
    </Container>
  )
}

export default Download
