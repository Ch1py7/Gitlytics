import { FC, ReactElement } from 'react'
import * as S from './Logo.styles'

export const Logo: FC = (): ReactElement => {
  return <S.Logo>
    <S.LogoImg src='/logo.png' />
    <S.LogoTitle>Gitlytics</S.LogoTitle>
  </S.Logo>
}
