import React from 'react'
import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'
import { COLORS } from '../../theme/constants'

type IconProps = {
  src: string
  color?: string
  width?: number
  onClick?: () => void
  className?: string
}

const StyledSVG = styled(SVG)`
  ${({ onClick }) => typeof onClick === 'function' && css`
    cursor: pointer;
    
    &:hover {
      * {
        fill: ${COLORS.ACCENT_LIGHT};
      }      
    }
  `}

  * {
    fill: ${({color}) => color || COLORS.ACCENT};
  }
`

const IconComp = ({ src, color, onClick, width = 20, className }: IconProps) => {
  return (
    <StyledSVG
      className={className}
      src={src}
      color={color}
      width={width}
      onClick={onClick}
    />
  )
}

export const Icon = styled(IconComp)``
