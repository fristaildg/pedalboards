import { useState } from 'react'
import { useFirestore, useFirestoreCollectionData, useFirestoreDocData, useStorage } from 'reactfire'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { boardIdSelector } from '../redux/selectors'

export const useBoards = () => {
  const { user } = useAuth0()
  const boardsRef = useFirestore()
    .collection('boards')  
  const userBoardsRef = boardsRef.where('ownerId', '==', user.sub)
  const { status, data: boards } = useFirestoreCollectionData(userBoardsRef)
  const loading = status === 'loading'
  const error = status !== 'success' && status !== 'loading'
  const createBoard = (newBoardData) => boardsRef.add(newBoardData)

  return {
    boards,
    error,
    loading,
    createBoard
  }
}

export const useBoard = (boardId) => {
  const storedId = useSelector(boardIdSelector)
  const id = boardId || storedId
  const boardRef = useFirestore()
    .collection('boards')
    .doc(id)
  const { status, data: board } = useFirestoreDocData(boardRef)
  const loading = status === 'loading'
  const error = status !== 'success' && status !== 'loading'
  const updateBoard = (boardData) => boardRef.update(boardData)

  return {
    board,
    loading,
    error,
    updateBoard
  }
}

export const useAudioFiles = (boardId) => {
  const { updateBoard, board } = useBoard(boardId)
  const [loading, setLoading] = useState(false)
  const storageRef = useStorage().ref()
  const uploadFile = async (blob) => {
    try {
      setLoading(true)
      const file = await storageRef.child(`audio-samples/${blob.name}`).put(blob)
      const fileURL = await file.ref.getDownloadURL()
      updateBoard({ audioSamples: [...board.audioSamples, fileURL] })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    uploadFile,
    loading
  }
}
