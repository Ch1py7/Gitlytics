import { FC, ReactElement } from 'react'
import { Data } from 'types'
import * as S from './UserGraphsCard.styles'
import { FirstContributionCards } from 'components/FirstContributionCards'
import { GithubContributions } from 'components/GithubContributions'
import { StatsContainer } from 'components/StatsContainer'

interface UserGraphsCardProps {
  data: Data
  search: string
}

export const UserGraphsCard: FC<UserGraphsCardProps> = ({ data, search }): ReactElement => {
  return (
    <S.UserGraphsCard>
      <FirstContributionCards data={data} />
      <GithubContributions data={data} />
      <StatsContainer data={data} user={search} />
    </S.UserGraphsCard>
  )
}
