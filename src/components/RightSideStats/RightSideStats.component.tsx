import { ContributionDayContainer } from 'components/ContributionDayContainer'
import { FC, ReactElement, useContext } from 'react'
import { Data } from 'types'
import * as S from './RightSideStats.styles'
import { LightModeContext } from 'context'

interface RightSideStatsProps {
  user: string
  data: Data
}

export const RightSideStats: FC<RightSideStatsProps> = ({ data, user }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  
  return (
    <S.RightSideStats>
      <S.Input lightMode={lightMode}  /> {/** TODO: add logic for repos and styles */}
      <ContributionDayContainer data={data} />
      <S.Stats
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&theme=${
          lightMode ? 'default' : 'radical'
        }&layout=compact&langs_count=10`}
        alt='stats'
      />
    </S.RightSideStats>
  )
}
