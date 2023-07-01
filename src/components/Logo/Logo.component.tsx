import { FC, ReactElement } from 'react'
import * as S from './Logo.styles'

export const Logo: FC = (): ReactElement => {
  return (
    <S.Logo href='/'>
      <S.LogoImg src='/logo.png' alt='logo' />
      <S.LogoTitle>Gitlytics</S.LogoTitle>
    </S.Logo>
  )
}
