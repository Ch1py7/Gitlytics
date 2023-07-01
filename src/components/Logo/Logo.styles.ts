import styled from 'styled-components'

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const LogoImg = styled.img`
  height: 4rem;
  width: 4rem;
`

export const LogoTitle = styled.h1`
  display: block;
  font-weight: 800;
  font-size: 2.4rem;
  color: #ededed;
  line-height: 3.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`
