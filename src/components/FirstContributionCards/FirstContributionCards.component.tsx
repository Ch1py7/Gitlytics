import { Icon } from '@iconify/react'
import { LightModeContext } from 'context'
import { FC, ReactElement, useContext } from 'react'
import { Data } from 'types'
import * as S from './FirstContributionCards.styles'

interface FirstContributionCardsProps {
  data: Data
}

export const FirstContributionCards: FC<FirstContributionCardsProps> = ({ data }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.FirstContributionCards>
      {data.user.isBountyHunter ? (
        <S.BugBounty lightMode={lightMode}>
          <span style={{ fontSize: '1.6rem' }}>Bounty Hunter</span>
          <Icon icon='simple-icons:hackaday' color='#279500' width={24} height={24} />
        </S.BugBounty>
      ) : (
        <S.BugBounty lightMode={lightMode}>
          <span style={{ fontSize: '1.6rem' }}>Bounty Hunter</span>
          <Icon icon='simple-icons:hackaday' color='#D00C0C' width={24} height={24} />
        </S.BugBounty>
      )}
      {data.user.contributionsCollection.firstIssueContribution && (
        <S.FirstOf
          lightMode={lightMode}
          href={data.user.contributionsCollection.firstIssueContribution.issue?.url}
          target='_blank'
          rel='noreferrer'
        >
          <span style={{ fontSize: '1.6rem' }}>First Issue</span>
          <Icon icon='gridicons:external' color='#efefef' width={24} height={24} />
        </S.FirstOf>
      )}
      {data.user.contributionsCollection.firstRepositoryContribution && (
        <S.FirstOf
          lightMode={lightMode}
          href={data.user.contributionsCollection.firstRepositoryContribution.repository?.url}
          target='_blank'
          rel='noreferrer'
        >
          <span style={{ fontSize: '1.6rem' }}>First Contribution</span>
          <Icon icon='gridicons:external' color='#efefef' width={24} height={24} />
        </S.FirstOf>
      )}
      {data.user.contributionsCollection.firstPullRequestContribution && (
        <S.FirstOf
          lightMode={lightMode}
          href={data.user.contributionsCollection.firstPullRequestContribution.pullRequest?.url}
          target='_blank'
          rel='noreferrer'
        >
          <span style={{ fontSize: '1.6rem' }}>First Pull Request</span>
          <Icon icon='gridicons:external' color='#efefef' width={24} height={24} />
        </S.FirstOf>
      )}
    </S.FirstContributionCards>
  )
}
