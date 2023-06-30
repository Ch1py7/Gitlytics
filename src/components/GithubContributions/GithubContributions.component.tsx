import { FC, ReactElement } from 'react'
import { Data } from 'types'
import { colors } from 'utils'
import * as S from './GithubContributions.styles'

interface GithubContributionsProps {
  data: Data
}

export const GithubContributions: FC<GithubContributionsProps> = ({ data }): ReactElement => {
  const { contributionCalendar } = data.user.contributionsCollection

  return (
    <S.GithubContributions>
      {contributionCalendar.weeks.map((week, index) => (
        <S.GithubSquareWeeks key={index}>
          {week.contributionDays.map((day, index) => (
            <S.GithubSquareDays
              key={index}
              title={`${day.date}\nContributions: ${day.contributionCount}`}
              sqColor={colors[day.color]}
            />
          ))}
        </S.GithubSquareWeeks>
      ))}
    </S.GithubContributions>
  )
}
