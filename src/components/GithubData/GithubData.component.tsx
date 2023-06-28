import { FC, ReactElement, useEffect, useState } from 'react'
import { Data } from 'types'
import { getApiData } from '../../graphql/client'
import * as S from './GithubData.styles'
import { UserCard } from 'components/UserCard'

interface GithubDataProps {
  search: string
}

export const GithubData: FC<GithubDataProps> = ({ search }): ReactElement => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    async function fetchData() {
      const { data } = await getApiData(search)
      setData(data)
    }
    fetchData()
  }, [search])

  return (
    <S.GithubData>
      {data?.user ? (
        <UserCard data={data} search={search} />
      ) : null}
    </S.GithubData>
  )
}
