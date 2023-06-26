import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import * as S from './Header.styles'

export const Header: FC = (): ReactElement => {
  return (
    <S.Header>
      <S.Title>
        Github <br /> Analytics
      </S.Title>
      <S.Phrase className='text-[#919191] font-bold text-xl'>
        The fastest way to see your statistics and curious graphs of Github.
      </S.Phrase>
      <S.ButtonsContainer>
        <S.Button>
          <Icon icon='carbon:play-filled' width={24} height={24} />
          Why Gitlytics
        </S.Button>
        <S.Button>
          Get Analytics
          <Icon icon='formkit:arrowright' width={24} height={24} />
        </S.Button>
        <S.Button>
          Favorite
          <Icon icon='uil:cloud-heart' width={24} height={24} />
        </S.Button>
      </S.ButtonsContainer>
    </S.Header>
  )
}
