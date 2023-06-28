import { FC, ReactElement } from 'react'
import * as S from './UserSocialCard.styles'
import { Data } from 'types'
import { Icon } from '@iconify/react'

interface UserSocialCardProps {
  data: Data
}

export const UserSocialCard: FC<UserSocialCardProps> = ({ data }): ReactElement => {
  return (
    <S.UserSocialCard>
      {data.user.location ? (
        <S.UserSocial>
          <Icon
            icon={`emojione:flag-for-${data.user.location.toLowerCase()}`}
            width={24}
            height={24}
          />
          <span style={{ fontSize: '2rem' }}>{data.user.location}</span>
        </S.UserSocial>
      ) : null}
      {data.user.websiteUrl ? (
        <S.UserSocial>
          <Icon icon='system-uicons:chain' width={24} height={24} />
          <S.UserSocialAnchor href={data.user.websiteUrl} target='_blank' rel='noreferrer'>
            Website
          </S.UserSocialAnchor>
        </S.UserSocial>
      ) : null}
      {data.user.socialAccounts.edges.map((social) => (
        <S.UserSocial key={social.node.provider}>
          <Icon icon={`skill-icons:${social.node.provider.toLowerCase()}`} width={24} height={24} />
          <S.UserSocialAnchor href={social.node.url} target='_blank' rel='noreferrer'>
            {social.node.displayName}
          </S.UserSocialAnchor>
        </S.UserSocial>
      ))}
    </S.UserSocialCard>
  )
}
