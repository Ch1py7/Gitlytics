import { Button } from 'components/Button'
import { UserSocialCard } from 'components/UserSocialCard'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import * as S from './UserCard.styles'

interface UserCardProps {
  data: Data
  search: string
}

export const UserCard: FC<UserCardProps> = ({ data, search }): ReactElement => {
  return (
    <S.UserCard>
      <S.UserInformation>
        <S.UserImage src={data.user.avatarUrl} />
        <S.UserDescription>
          <div>
            <S.UserName>{data.user.name}</S.UserName>
            <S.UserNickname>{search}</S.UserNickname>
          </div>
          <S.ButtonsContainer>
            <Button
              where={data.user.url}
              icon='akar-icons:github-fill'
              color='#ffffff'
              text='Github'
            />
            <Button where={data.user.url} icon='mdi:heart' color='#BB2929' text='Favorite' />
          </S.ButtonsContainer>
          {data.user.bio ? <S.UserPhrase>{data.user.bio}</S.UserPhrase> : null}
        </S.UserDescription>
        <S.Separator />
        <UserSocialCard data={data} />
      </S.UserInformation>
    </S.UserCard>
  )
}
