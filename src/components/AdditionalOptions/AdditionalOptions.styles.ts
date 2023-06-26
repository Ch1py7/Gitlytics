import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const AdditionalOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const SocialsContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1280px) {
    display: none;
  }
`

export const LanguageContainer = styled.div`
  padding: 0 8px;
  border: 1px solid transparent;
  border-color: transparent #c8c8c8;
  cursor: pointer;
`

export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const Language = styled(Icon)`
  font-size: 3rem;
  color: #C8C8C8;
  cursor: pointer;
`

export const Socials = styled(Icon)`
  font-size: 3rem;
  color: #C8C8C8;
  cursor: pointer;
`

export const BurgerMenu = styled(Icon)`
  font-size: 3rem;
  color: #C8C8C8;
`
