import { LightModeContext } from 'context'
import { Dispatch, FC, ReactElement, useContext, useState } from 'react'
import * as S from './Search.styles'

interface SearchProps {
  setSearch: Dispatch<React.SetStateAction<string>>
}

export const Search: FC<SearchProps> = ({ setSearch }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearch(query)
    setQuery('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <S.Search>
      <S.SearchIcon icon='ph:magnifying-glass' />
      <form onSubmit={handleSubmit} style={{ height: '100%', width: '100%' }}>
        <S.SearchInput
          value={query}
          onChange={handleChange}
          lightMode={lightMode}
          placeholder='Search'
        />
      </form>
    </S.Search>
  )
}
