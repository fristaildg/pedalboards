import React from 'react'
import styled from 'styled-components'
import { COLORS, Spacer, SubHeading, Text, Container } from '../../common'
import SVG from 'react-inlinesvg'
import { useTranslation } from 'next-i18next'

const ArrowImg = styled(SVG)`
  position: absolute;
  width: 100px;
  right: 100px;
  transform: rotateY(180deg);
  fill: ${COLORS.WHITE};
`

const BoardListEmpty = () => {
  const { t } = useTranslation('dashboard')

  return (
    <Container>
      <SubHeading>{t("board_list_empty.heading")}</SubHeading>
      <Spacer spacing={5} />
      <Text>{t("board_list_empty.description")}</Text>
      <ArrowImg src="/arrow.svg" />
    </Container>
  )
}

export default BoardListEmpty
