import { ContributionDayContainer } from 'components/ContributionDayContainer'
import { Repositories } from 'components/Repositories'
import { LightModeContext } from 'context'
import { FC, ReactElement, useContext, useState } from 'react'
import { Data } from 'types'
import * as S from './RightSideStats.styles'

interface RightSideStatsProps {
  user: string
  data: Data
}

export const RightSideStats: FC<RightSideStatsProps> = ({ data, user }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  const [query, setQuery] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <S.RightSideStats>
      <S.Input placeholder='Search by language' lightMode={lightMode} onChange={handleChange} />
      {query === '' ? (
        <>
          <ContributionDayContainer data={data} />
          <S.Stats
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&theme=${
              lightMode ? 'default' : 'radical'
            }&layout=compact&langs_count=10`}
            alt='stats'
          />
        </>
      ) : (
        <Repositories data={data} filter={query} />
      )}
    </S.RightSideStats>
  )
}
