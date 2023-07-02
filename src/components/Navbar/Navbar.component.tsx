import { AdditionalOptions } from 'components/AdditionalOptions'
import { Logo } from 'components/Logo'
import { Search } from 'components/Search'
import { Dispatch, FC, ReactElement } from 'react'
import * as S from './Navbar.styles'
import { LightModeContext } from 'context'
import { useContext } from 'react'

interface NavbarProps {
  setSearch: Dispatch<React.SetStateAction<string>>
}

export const Navbar: FC<NavbarProps> = ({ setSearch }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  return (
    <S.Navbar lightMode={lightMode}>
      <Logo />
      <Search setSearch={setSearch}/>
      <AdditionalOptions />
    </S.Navbar>
  )
}
