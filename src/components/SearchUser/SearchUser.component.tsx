import { FC, ReactElement } from 'react'
import * as S from './SearchUser.styles'

export const SearchUser: FC = (): ReactElement => {
  return (
    <S.SearchUser>
      <S.SearchTitle className='md:text-6xl text-4xl text-center text-[#F3F3F3] font-bold'>
        Analyze your Github Profile!
      </S.SearchTitle>
      <S.SearchForm>
        <S.SearchInput
          placeholder='Octocat'
        />
        <S.SearchButton>
          Search
        </S.SearchButton>
      </S.SearchForm>
    </S.SearchUser>
  )
}
