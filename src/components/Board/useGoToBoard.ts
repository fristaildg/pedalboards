import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { BoardDocument } from "../../common/types";
import { setBoard } from "../../redux/board";


const useGoToBoard = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (board: BoardDocument) => {
    dispatch(setBoard(board))
    router.push('/my-board')
  }
}

export default useGoToBoard
