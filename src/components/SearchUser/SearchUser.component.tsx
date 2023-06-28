import { Dispatch, FC, ReactElement, useState } from 'react'
import * as S from './SearchUser.styles'

interface SearchUserProps {
  setSearch: Dispatch<React.SetStateAction<string>>
}

export const SearchUser: FC<SearchUserProps> = ({ setSearch }): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearch(query)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  
  return (
    <S.SearchUser id='analyze'>
      <S.SearchTitle>
        Analyze your Github Profile!
      </S.SearchTitle>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput placeholder='Octocat' onChange={handleChange}  />
        <S.SearchButton>Search</S.SearchButton>
      </S.SearchForm>
    </S.SearchUser>
  )
}
