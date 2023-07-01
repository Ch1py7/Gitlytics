import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import { days } from 'utils'
import * as S from './ContributionDayContainer.styles'

interface ContributionDayContainerProps {
  data: Data
}

export const ContributionDayContainer: FC<ContributionDayContainerProps> = ({ data }): ReactElement => {
  const weeks = data.user.contributionsCollection.contributionCalendar.weeks.map((week) =>
    week.contributionDays.map((day) => day.contributionCount)
  )

  const contributionsPerDayOfTheWeek = [0, 0, 0, 0, 0, 0, 0]
  weeks.forEach((week) => {
    week.forEach((day, index) => {
      contributionsPerDayOfTheWeek[index] += day
    })
  })

  const maxContribution = Math.max(...contributionsPerDayOfTheWeek)
  const maxContributionDay = contributionsPerDayOfTheWeek.indexOf(maxContribution)
  const minContribution = Math.min(...contributionsPerDayOfTheWeek)
  const minContributionDay = contributionsPerDayOfTheWeek.indexOf(minContribution)

  return (
    <S.ContributionDayContainer>
      <S.ContributionDay>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          <Icon icon='solar:graph-new-up-broken' height={16} width={16} color='gold' />
          <S.ContributionDayText>Most commited day</S.ContributionDayText>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}
        >
          <S.ContributionDayText>{days[maxContributionDay]}</S.ContributionDayText>
          <S.ContributionDayText>{maxContribution}</S.ContributionDayText>
        </div>
      </S.ContributionDay>
      <S.ContributionDay>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          <Icon icon='solar:graph-down-new-broken' height={16} width={16} color='gold' />
          <S.ContributionDayText>Worst commited day</S.ContributionDayText>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}
        >
          <S.ContributionDayText>{days[minContributionDay]}</S.ContributionDayText>
          <S.ContributionDayText>{minContribution}</S.ContributionDayText>
        </div>
      </S.ContributionDay>
    </S.ContributionDayContainer>
  )
}
