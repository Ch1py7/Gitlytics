import { Loader } from 'components/Loader'
import { UserCard } from 'components/UserCard'
import { UserGraphsCard } from 'components/UserGraphsCard'
import { useGithubQuery } from 'hooks'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import { Queries } from '../../graphql/queries'
import * as S from './GithubData.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface GithubDataProps {
  search: string
}

export const GithubData: FC<GithubDataProps> = ({ search }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  const { data, loading, error } = useGithubQuery<Data>(Queries.getApiData(search))

  if (loading) return <Loader />
  if (error) return <S.GithubData lightMode={lightMode} style={{ fontSize: '3rem' }}>{error.message}</S.GithubData>
  if (!data) return <S.GithubData lightMode={lightMode} />
  return (
    <S.GithubData lightMode={lightMode}>
      <UserCard data={data} search={search} />
      <UserGraphsCard data={data} search={search} />
    </S.GithubData>
  )
}
