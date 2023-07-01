import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import * as S from './Button.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

interface ButtonProps {
  where: string
  icon: string
  color: string
  text: string
}

export const Button: FC<ButtonProps> = ({ where, icon, color, text }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)

  return (
    <S.Button href={where} target='_blanck' rel='noreferrer' lightMode={lightMode}>
      <Icon icon={icon} width={22} height={22} color={color} />
      <span>{text}</span>
    </S.Button>
  )
}
