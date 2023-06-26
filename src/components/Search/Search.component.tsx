import { FC, ReactElement } from 'react'
import * as S from './Search.styles'

export const Search: FC = (): ReactElement => {
  return (
    <S.Search>
      <S.SearchIcon icon='ph:magnifying-glass' />
      <S.SearchInput placeholder='Search' />
      <S.SearchButton>Ctrl K</S.SearchButton>
    </S.Search>
  )
}
