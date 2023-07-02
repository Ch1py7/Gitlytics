import { Button } from 'components/Button'
import { UserSocialCard } from 'components/UserSocialCard'
import { FC, ReactElement } from 'react'
import { Data } from 'types'
import * as S from './UserCard.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface UserCardProps {
  data: Data
  search: string
}

export const UserCard: FC<UserCardProps> = ({ data, search }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.UserInformation lightMode={lightMode}>
      <S.UserImage src={data.user.avatarUrl} alt='userImage' lightMode={lightMode} />
      <S.UserDescription>
        <div>
          <S.UserName>{data.user.name}</S.UserName>
          <S.UserNickname lightMode={lightMode}>{search}</S.UserNickname>
        </div>
        <S.ButtonsContainer>
          <Button
            where={data.user.url}
            icon='akar-icons:github-fill'
            color={`${lightMode ? '#1e1e1e' : '#efefef'}`}
            text='Github'
          />
        </S.ButtonsContainer>
        {data.user.bio ? <S.UserPhrase>{data.user.bio}</S.UserPhrase> : null}
      </S.UserDescription>
      <S.Separator lightMode={lightMode} />
      <UserSocialCard data={data} />
    </S.UserInformation>
  )
}
