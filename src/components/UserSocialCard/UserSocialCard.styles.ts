import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const UserSocialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
  gap: 1.4rem;
`

export const UserSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const UserSocialAnchor = styled.a<LightMode>`
  font-size: 2rem;
  color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
`
