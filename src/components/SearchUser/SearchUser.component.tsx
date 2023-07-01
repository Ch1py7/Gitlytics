import { Dispatch, FC, ReactElement, useState } from 'react'
import * as S from './SearchUser.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface SearchUserProps {
  setSearch: Dispatch<React.SetStateAction<string>>
}

export const SearchUser: FC<SearchUserProps> = ({ setSearch }): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const { lightMode } = useContext(LightModeContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearch(query)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <S.SearchUser id='analyze'>
      <S.SearchTitle lightMode={lightMode}>Analyze your Github Profile!</S.SearchTitle>
      <S.SearchForm onSubmit={handleSubmit} lightMode={lightMode}>
        <S.SearchInput placeholder='Octocat' onChange={handleChange} lightMode={lightMode} />
        <S.SearchButton lightMode={lightMode}>Search</S.SearchButton>
      </S.SearchForm>
    </S.SearchUser>
  )
}
