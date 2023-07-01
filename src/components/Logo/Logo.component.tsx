import { FC, ReactElement, useContext } from 'react'
import * as S from './Logo.styles'
import { LightModeContext } from 'context'

export const Logo: FC = (): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.Logo href='/'>
      <S.LogoImg src='/logo.png' alt='logo' lightMode={lightMode} />
      <S.LogoTitle lightMode={lightMode}>Gitlytics</S.LogoTitle>
    </S.Logo>
  )
}
