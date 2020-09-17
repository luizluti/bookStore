/* eslint-disable react/prop-types */
import React from 'react'
import {
  DownloadBtn,
  DownloadBtnText
} from './styles'
import DownloadSvg from '../../assets/icons/download.svg'

const DownloadButton = () => {
  return (

    <DownloadBtn
      onPress={() => {}}
    >
      <DownloadSvg height={12} fill={'#F7AB21'} style={{ marginLeft: -12 }} />
      <DownloadBtnText>
        DOWNLOAD PRÉVIA
      </DownloadBtnText>
    </DownloadBtn>

  )
}

export default DownloadButton
