import { useRouter } from 'next/router'
import { PublicBoard } from '../../src/components/Board'

const UserBoard = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return (
    <PublicBoard boardId={id as string} />
  )
}

export default UserBoard
