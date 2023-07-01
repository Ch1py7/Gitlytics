import { FirstContributionCards } from 'components/FirstContributionCards'
import { GithubContributions } from 'components/GithubContributions'
import { StatsContainer } from 'components/StatsContainer'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import * as S from './UserGraphsCard.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface UserGraphsCardProps {
  data: Data
  search: string
}

export const UserGraphsCard: FC<UserGraphsCardProps> = ({ data, search }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.UserGraphsCard lightMode={lightMode}>
      <FirstContributionCards data={data} />
      <GithubContributions data={data} />
      <StatsContainer data={data} user={search} />
    </S.UserGraphsCard>
  )
}
