import React, { createContext } from 'react'
import { Children } from '../common/types'

export const board = {
  isPublic: false
}

export const PageContext = createContext(board)

type PageContextProviderProps = {
  children: Children
  value: typeof board
}

export const PageContextProvider = ({ children, value }: PageContextProviderProps) => <PageContext.Provider value={value}>{children}</PageContext.Provider>
