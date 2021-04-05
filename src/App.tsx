import React from 'react'
import Board from './components/Board'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const MyBoard = () => (
  <>
    <Sidebar />
    <Board />
  </>
)

const App = () => {
  return (
    <main>
      <Home />
    </main>
  )
}

export default App
