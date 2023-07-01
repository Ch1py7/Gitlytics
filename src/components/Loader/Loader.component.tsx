import { FC, ReactElement } from 'react'
import * as S from './Loader.styles'

export const Loader: FC = (): ReactElement => {
  return (
    <S.Loader>
      <S.Wheel />
      <S.Hamster>
        <S.HamsterBody>
          <S.HamsterHead>
            <S.HamsterEar />
            <S.HamsterEye />
            <S.HamsterNose />
          </S.HamsterHead>
        </S.HamsterBody>
        <S.HamsterLimb_Fr />
        <S.HamsterLimb_Fl />
        <S.HamsterLimb_Br />
        <S.HamsterLimb_Bl />
        <S.HamsterTail />
      </S.Hamster>
      <S.Spoke />
    </S.Loader>
  )
}
