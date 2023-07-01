import { ToggleSwitch } from 'components/ToggleSwitch'
import { FC, ReactElement } from 'react'
import * as S from './AdditionalOptions.styles'

export const AdditionalOptions: FC = (): ReactElement => {
  return (
    <>
      <S.AdditionalOptions>
        <S.LanguageContainer>
          <S.Language icon='mdi:language' />
        </S.LanguageContainer>
        <ToggleSwitch />
        <S.SocialsContainer>
          <S.Socials icon='mdi:github' />
          <S.Socials icon='ri:twitter-fill' />
          <S.Socials icon='ic:baseline-discord' />
        </S.SocialsContainer>
      </S.AdditionalOptions>
      <S.Mobile>
        <S.BurgerMenu icon='iconamoon:menu-burger-horizontal-bold' />
      </S.Mobile>
    </>
  )
}
