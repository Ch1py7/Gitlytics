import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const LogoImg = styled.img<LightMode>`
  height: 4rem;
  width: 4rem;
  ${({ lightMode }) => lightMode && 'filter: invert(1);'}
`

export const LogoTitle = styled.h1<LightMode>`
  display: block;
  font-weight: 800;
  font-size: 2.4rem;
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#ededed')};
  line-height: 3.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`
