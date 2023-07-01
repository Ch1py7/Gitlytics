import { FC, ReactElement } from 'react'
import { Data } from 'types'
import { colors, lightColors } from 'utils'
import * as S from './GithubContributions.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface GithubContributionsProps {
  data: Data
}

export const GithubContributions: FC<GithubContributionsProps> = ({ data }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  const { contributionCalendar } = data.user.contributionsCollection

  return (
    <S.GithubContributions>
      {contributionCalendar.weeks.map((week, index) => (
        <S.GithubSquareWeeks key={index}>
          {week.contributionDays.map((day, index) => (
            <S.GithubSquareDays
              key={index}
              title={`${day.date}\nContributions: ${day.contributionCount}`}
              sqColor={lightMode ? lightColors[day.color] : colors[day.color]}
            />
          ))}
        </S.GithubSquareWeeks>
      ))}
    </S.GithubContributions>
  )
}
