import { Logo } from 'components/Logo'
import { FC, ReactElement } from 'react'
import * as S from './Footer.styles'

export const Footer: FC = (): ReactElement => {
  return (
    <S.Footer>
      <S.FooterSection>
        <Logo />
        <S.FooterSmall>
          Made with <S.Heart icon='ph:heart-fill' /> by Afordin
        </S.FooterSmall>
      </S.FooterSection>
    </S.Footer>
  )
}
