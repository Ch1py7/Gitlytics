import { Icon } from '@iconify/react'
import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  gap: 3.2rem;
  font-size: 2rem;
  font-weight: 500;
  color: #ededed;
  line-height: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  cursor: pointer;
  &:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  &:nth-child(2),
  &:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &:nth-child(4),
  &:nth-child(5) {
    display: block;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  &:nth-child(6) {
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
    
    @media (max-width: 1280px) {
      display: block;
    }
  }
`

export const MenuArrow = styled(Icon)`
  font-size: 1.4rem;
`
