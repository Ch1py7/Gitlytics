import { FC, ReactElement } from 'react'
import * as S from './UserCard.styles'
import { Data } from 'types'
import { Button } from 'components/Button'
import { UserSocialCard } from 'components/UserSocialCard'

interface UserCardProps {
  data: Data
  search: string
}

export const UserCard: FC<UserCardProps> = ({ data, search }): ReactElement => {
  return (
    <S.UserCard>
      {data?.user ? (
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
      ) : null}
    </S.UserCard>
  )
}
