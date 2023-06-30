import { ContributionDayContainer } from 'components/ContributionDayContainer'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import * as S from './RightSideStats.styles'

interface RightSideStatsProps {
  user: string
  data: Data
}

export const RightSideStats: FC<RightSideStatsProps> = ({ data, user }): ReactElement => {
  return (
    <S.RightSideStats>
      <S.Input /> {/** TODO: add logic for repos and styles */}
      <ContributionDayContainer data={data} />
      <S.Stats
        src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=radical`}
        alt='stats'
      />
    </S.RightSideStats>
  )
}
