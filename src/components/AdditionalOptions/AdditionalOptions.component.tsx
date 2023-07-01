import { ToggleSwitch } from 'components/ToggleSwitch'
import { FC, ReactElement } from 'react'
import * as S from './AdditionalOptions.styles'

export const AdditionalOptions: FC = (): ReactElement => {
  return (
    <>
      <S.AdditionalOptions>
        <ToggleSwitch />
        <S.SocialsContainer>
          <a href='https://github.com/Ch1py7' target='_blank' rel='noreferrer'>
            <S.Socials icon='mdi:github' />
          </a>
          <a href='https://discord.gg/p9u5yMRhYN' target='_blank' rel='noreferrer'>
            <S.Socials icon='ic:baseline-discord' />
          </a>
        </S.SocialsContainer>
      </S.AdditionalOptions>
      <S.Mobile>
        <S.BurgerMenu icon='iconamoon:menu-burger-horizontal-bold' />
      </S.Mobile>
    </>
  )
}
