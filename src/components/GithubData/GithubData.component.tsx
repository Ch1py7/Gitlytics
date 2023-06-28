import { UserCard } from 'components/UserCard'
import { FC, ReactElement, useEffect, useState } from 'react'
import { Data } from 'types'
import { getApiData } from '../../graphql/client'
import * as S from './GithubData.styles'

interface GithubDataProps {
  search: string
}

export const GithubData: FC<GithubDataProps> = ({ search }): ReactElement => {
  const [data, setData] = useState<Data | null>(null)

  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getApiData(search)
      setData(data)
    }
    fetchData()
  }, [search])

  if (!data) return <S.GithubData />
  return (
    <S.GithubData>
      <UserCard data={data} search={search} />
    </S.GithubData>
  )
}
