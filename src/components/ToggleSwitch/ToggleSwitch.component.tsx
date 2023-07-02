import { Icon } from '@iconify/react'
import { LightModeContext } from 'context'
import { FC, ReactElement, useContext } from 'react'
import * as S from './ToggleSwitch.styles'

export const ToggleSwitch: FC = (): ReactElement => {
  const { lightMode, setLightMode } = useContext(LightModeContext)
  return (
    <S.ToggleSwitch isActive={lightMode} onClick={() => setLightMode((prev) => !prev)}>
      <S.IconContainer isActive={lightMode}>
        {lightMode ? (
          <Icon icon='mdi:weather-sunny' width={20} height={20} color='#353535' />
        ) : (
          <Icon icon='mdi:weather-night' width={20} height={20} color='#999' />
        )}
      </S.IconContainer>
    </S.ToggleSwitch>
  )
}
