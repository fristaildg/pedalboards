import React from 'react'
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

const UploadAudioInput = () => {
  const { uploadFile, loading } = useAudioFiles()

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    uploadFile(file)
  }

  if (loading) return <Text>Uploading audio...</Text>

  return <UploadInput type="file" onChange={handleFileUpload} />
}

export default UploadAudioInput
