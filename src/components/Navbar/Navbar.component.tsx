import { AdditionalOptions } from 'components/AdditionalOptions'
import { Logo } from 'components/Logo'
import { Search } from 'components/Search'
import { FC, ReactElement } from 'react'
import * as S from './Navbar.styles'
import { LightModeContext } from 'context'
import { useContext } from 'react'

export const Navbar: FC = (): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  return (
    <S.Navbar lightMode={lightMode}>
      <Logo />
      <Search />
      <AdditionalOptions />
    </S.Navbar>
  )
}
