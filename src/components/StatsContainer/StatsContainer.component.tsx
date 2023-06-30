import { FC, ReactElement } from 'react'
import * as S from './StatsContainer.styles'
import { LeftSideStats } from 'components/LeftSideStats'
import { RightSideStats } from 'components/RightSideStats'
import { Data } from 'types'

interface StatsContainerProps {
  user: string
  data: Data
}

export const StatsContainer: FC<StatsContainerProps> = ({ data, user }): ReactElement => {
  return (
    <S.StatsContainer>
      <LeftSideStats user={user} />
      <RightSideStats user={user} data={data} />
    </S.StatsContainer>
  )
}
