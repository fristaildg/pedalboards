import React from 'react'
import { Text } from '@spark-digital/ignition'
import { useAudioFiles } from '../../swr/useFirebase'

const UploadAudioInput = () => {
  const { uploadFile, loading } = useAudioFiles()

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    uploadFile(file)
  }

  if (loading) return <Text>Uploading audio...</Text>

  return <input type="file" onChange={handleFileUpload} />
}

export default UploadAudioInput
