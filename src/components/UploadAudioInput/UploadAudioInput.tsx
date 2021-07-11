import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Input, COLORS, FONTS, SIZES, Spinner } from '../../common'
import { useAudioFiles } from '../../swr/useFirebase'
import { toggleAlert, setAlertMessage } from '../../redux/audioPlayer'
import { useTranslation } from 'next-i18next'

const UploadInput = styled(Input)`
  input::file-selector-button {
    background-color: ${COLORS.GRAY};
    border: none;
    font-family: ${FONTS.SANS_SERIF};
    padding: ${SIZES.SPACING}px;
    color: ${COLORS.WHITE};
    margin-right: ${SIZES.SPACING}px;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.ACCENT};
    }
  }
`

const sizeLimit = 5000

const UploadAudioInput = () => {
  const { uploadFile, loading, uploadStatus } = useAudioFiles()
  const [ isTooLarge, setIsTooLarge ] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation('common')
  const helperText = isTooLarge ? t('audio_samples.input.too_large') : undefined

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0]
    const fileSize = Math.round((file.size / 1024))
    if (fileSize > sizeLimit) {
      setIsTooLarge(true)
    } else {
      await uploadFile(file)
      dispatch(setAlertMessage(uploadStatus))
      dispatch(toggleAlert())
    }
  }

  if (loading) return <Spinner />

  // @ts-ignore
  return <UploadInput type="file" accept="audio/*" onChange={handleFileUpload} helperText={helperText} />
}

export default UploadAudioInput
