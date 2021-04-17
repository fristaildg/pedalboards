import { useRouter } from 'next/router'
import { PublicBoard } from '../../src/components/Board'

const UserBoard = () => {
  const router = useRouter()
  const { id } = router.query

  console.log(id)

  if (!id) return null

  return (
    <PublicBoard boardId={id} />
  )
}

export default UserBoard
