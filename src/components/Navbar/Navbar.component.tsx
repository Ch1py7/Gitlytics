import { AdditionalOptions } from 'components/AdditionalOptions'
import { Logo } from 'components/Logo'
import { Menu } from 'components/Menu'
import { Search } from 'components/Search'
import { FC, ReactElement } from 'react'
import * as S from './Navbar.styles'

export const Navbar: FC = (): ReactElement => {
  return (
    <S.Navbar>
      <Logo />
      <Search />
      <Menu />
      <AdditionalOptions />
    </S.Navbar>
  )
}
