import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Input, COLORS, FONTS, SIZES } from '../../common'
import { useAudioFiles } from '../../swr/useFirebase'

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
  const { uploadFile, loading } = useAudioFiles()
  const [ isTooLarge, setIsTooLarge ] = useState(false)
  const helperText = isTooLarge ? 'This audio is too large to upload' : undefined

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    const fileSize = Math.round((file.size / 1024))
    console.log(file)
    if (fileSize > sizeLimit) {
      setIsTooLarge(true)
    } else {
      uploadFile(file)
    }
  }

  if (loading) return <Text>Uploading audio...</Text>

  // @ts-ignore
  return <UploadInput type="file" accept="audio/*" onChange={handleFileUpload} helperText={helperText} />
}

export default UploadAudioInput
