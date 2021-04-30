import styled from 'styled-components'
import { COLORS, SIZES } from '../../theme/constants'

export const ModalHeader = styled.header`
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 20px;
`

export const ModalBody = styled.div`
  padding: 20px;
`

export const ModalFooter = styled.footer`
  padding: 20px;
  border-top: 1px solid ${COLORS.GRAY};
`