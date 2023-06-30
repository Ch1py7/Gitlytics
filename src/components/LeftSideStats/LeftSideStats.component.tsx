import { FC, ReactElement } from 'react'
import * as S from './LeftSideStats.styles'

interface LeftSideStatsProps {
  user: string
}

export const LeftSideStats: FC<LeftSideStatsProps> = ({ user }): ReactElement => {
  return (
    <S.LeftSideStats>
      <S.Title>Check your stats!</S.Title>
      <S.Stats
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&theme=radical&layout=compact&langs_count=10`}
        alt='stats'
      />
    </S.LeftSideStats>
  )
}
