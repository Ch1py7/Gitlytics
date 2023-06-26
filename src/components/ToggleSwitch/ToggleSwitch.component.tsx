import { Icon } from '@iconify/react'
import { FC, ReactElement, useState } from 'react'
import * as S from './ToggleSwitch.styles'

export const ToggleSwitch: FC = (): ReactElement => {
  const [active, setActive] = useState<boolean>(true)

  return (
    <S.ToggleSwitch isActive={active} onClick={() => setActive((prev) => !prev)}>
      <S.IconContainer isActive={active}>
        {active ? (
          <Icon icon='mdi:weather-night' width={20} height={20} color='#999' />
        ) : (
          <Icon icon='mdi:weather-sunny' width={20} height={20} color='#353535' />
        )}
      </S.IconContainer>
    </S.ToggleSwitch>
  )
}
