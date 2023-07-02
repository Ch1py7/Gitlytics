import { Logo } from 'components/Logo'
import { LightModeContext } from 'context'
import { FC, ReactElement, useContext } from 'react'
import * as S from './Footer.styles'

export const Footer: FC = (): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  return (
    <S.Footer>
      <S.FooterSection>
        <Logo />
        <S.FooterSmall lightMode={lightMode}>
          Made with <S.Heart icon='ph:heart-fill' /> by Gerardo Garcia
        </S.FooterSmall>
      </S.FooterSection>
    </S.Footer>
  )
}
