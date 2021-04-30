import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Children } from '../../types'

type PortalProps = {
  children: Children
  selector: string
}

const Portal = ({ children, selector }: PortalProps) => {
  const selectorRef = useRef()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // @ts-ignore
    selectorRef.current = document.querySelector(selector)
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [selector])

  return isMounted ? createPortal(children, selectorRef.current!) : null
}

export default Portal
