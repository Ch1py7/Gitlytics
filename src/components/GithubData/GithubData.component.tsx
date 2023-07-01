import { Loader } from 'components/Loader'
import { UserCard } from 'components/UserCard'
import { UserGraphsCard } from 'components/UserGraphsCard'
import { useGithubQuery } from 'hooks'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import { Queries } from '../../graphql/queries'
import * as S from './GithubData.styles'

interface GithubDataProps {
  search: string
}

export const GithubData: FC<GithubDataProps> = ({ search }): ReactElement => {
  const { data, loading, error } = useGithubQuery<Data>(Queries.getApiData(search))

  if (loading) return <Loader />
  if (error) return <S.GithubData style={{ fontSize: '3rem' }}>{error.message}</S.GithubData>
  if (!data) return <S.GithubData />
  return (
    <S.GithubData>
      <UserCard data={data} search={search} />
      <UserGraphsCard data={data} search={search} />
    </S.GithubData>
  )
}
