import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import * as S from './Header.styles'

export const Header: FC = (): ReactElement => {
  return (
    <S.Header>
      <S.Title>
        Github <br /> Analytics
      </S.Title>
      <S.Phrase>The fastest way to see your statistics and curious graphs of Github.</S.Phrase>
      <S.ButtonsContainer>
        <S.Button>
          <Icon icon='carbon:play-filled' width={24} height={24} />
          Why Gitlytics
        </S.Button>
        <S.Anchor href='#analyze'>
          Get Analytics
          <Icon icon='formkit:arrowright' width={24} height={24} />
        </S.Anchor>
        <S.Button>
          Favorite
          <Icon icon='uil:cloud-heart' width={24} height={24} />
        </S.Button>
      </S.ButtonsContainer>
    </S.Header>
  )
}
