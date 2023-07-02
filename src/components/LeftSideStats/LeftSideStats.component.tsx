import { LightModeContext } from 'context'
import { FC, ReactElement, useContext } from 'react'
import * as S from './LeftSideStats.styles'

interface LeftSideStatsProps {
  user: string
}

export const LeftSideStats: FC<LeftSideStatsProps> = ({ user }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.LeftSideStats>
      <S.Title lightMode={lightMode}>Check your stats!</S.Title>
      <S.Stats
        src={`https://github-readme-stats.vercel.app/api?username=${user}&theme=${
          lightMode ? 'default' : 'radical'
        }&show=reviews,discussions_started,discussions_answered`}
        alt='stats'
      />
    </S.LeftSideStats>
  )
}
