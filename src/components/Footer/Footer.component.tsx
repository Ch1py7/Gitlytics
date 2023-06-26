import { FC, ReactElement } from 'react'
import * as S from './Footer.styles'
import { Logo } from 'components/Logo'

export const Footer: FC = (): ReactElement => {
  return (
    <S.Footer>
      <S.FooterSection>
        <Logo />
        <S.FooterSmall>
          Copyright © 2023 Gitlytics, Inc. All rights reserved.
        </S.FooterSmall>
      </S.FooterSection>
    </S.Footer>
  )
}
