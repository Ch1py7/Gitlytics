import { FC, ReactElement } from 'react'
import * as S from './Search.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

export const Search: FC = (): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.Search>
      <S.SearchIcon icon='ph:magnifying-glass' />
      <S.SearchInput lightMode={lightMode} placeholder='Search' />
      <S.SearchButton lightMode={lightMode}>Ctrl K</S.SearchButton>
    </S.Search>
  )
}
