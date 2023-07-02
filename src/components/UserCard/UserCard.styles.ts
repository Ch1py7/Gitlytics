import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const UserInformation = styled.div<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
  background-color: ${({ lightMode }) => (lightMode ? '#eaeaea' : '#181818')};
  border: 8px solid #828282;
  border-radius: 1.8rem;
  padding: 5.2rem;
  transition: all 0.2s ease-in-out;
`

export const UserDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.4rem;
`

export const UserImage = styled.img<LightMode>`
  width: 29rem;
  height: 29rem;
  border-radius: 50%;
  border: ${({ lightMode }) => (lightMode ? '6px solid #181818' : '6px solid #c1c1c1')};
  transition: all 0.2s ease-in-out;
`

export const UserName = styled.h1`
  font-size: 3.1rem;
  font-weight: 700;
  margin: 0;
`

export const UserNickname = styled.h2<LightMode>`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: ${({ lightMode }) => (lightMode ? '#181818' : '#a0a0a0')};
  transition: all 0.2s ease-in-out;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const UserPhrase = styled.p`
  font-size: 2rem;
  max-width: 29rem;
`

export const Separator = styled.div<LightMode>`
  width: 100%;
  height: 1px;
  background-color: ${({ lightMode }) => (lightMode ? '#181818' : '#e1e4e8')};
  transition: all 0.2s ease-in-out;
`
