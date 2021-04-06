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

// export async function getStaticPaths() {
//   return { paths: [
//     {params: {id: 'sdqY0zLJRvKIWwTC2Sn2'}},
//     {params: {id: 'K1Cie0bldmnVRIOO8Ay4'}}
//   ], fallback: false }
// }

// export async function getStaticProps({ params }) {
//   return { props: { id: params.id }}
// }

export default UserBoard
