import { FC, ReactElement } from 'react'
import * as S from './UserSocialCard.styles'
import { Data } from 'types'
import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface UserSocialCardProps {
  data: Data
}

export const UserSocialCard: FC<UserSocialCardProps> = ({ data }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
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
          <S.UserSocialAnchor href={data.user.websiteUrl} target='_blank' rel='noreferrer' lightMode={lightMode}>
            Website
          </S.UserSocialAnchor>
        </S.UserSocial>
      ) : null}
      {data.user.socialAccounts.edges.map((social) => (
        <S.UserSocial key={social.node.provider}>
          <Icon icon={`logos:${social.node.provider.toLowerCase()}`} width={24} height={24} />
          <S.UserSocialAnchor href={social.node.url} target='_blank' rel='noreferrer' lightMode={lightMode}>
            {social.node.displayName}
          </S.UserSocialAnchor>
        </S.UserSocial>
      ))}
    </S.UserSocialCard>
  )
}
