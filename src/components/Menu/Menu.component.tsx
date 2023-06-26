import { FC, ReactElement } from 'react'
import * as S from './Menu.styles'

export const Menu: FC = (): ReactElement => {
  return (
    <S.Menu>
      <S.MenuItem>
        Docs
        <S.MenuArrow icon='ep:arrow-down' />
      </S.MenuItem>
      <S.MenuItem>
        Resources
        <S.MenuArrow icon='ep:arrow-down' />
      </S.MenuItem>
      <S.MenuItem>
        About
        <S.MenuArrow icon='ep:arrow-down' />
      </S.MenuItem>
      <S.MenuItem>
        Design
      </S.MenuItem>
      <S.MenuItem>
        Account
      </S.MenuItem>
    </S.Menu>
  )
}
