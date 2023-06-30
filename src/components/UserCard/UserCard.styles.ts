import styled from 'styled-components'

export const UserInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
  background-color: #181818;
  border: 8px solid #828282;
  border-radius: 1.8rem;
  padding: 5.2rem;
`

export const UserDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.4rem;
`

export const UserImage = styled.img`
  width: 29rem;
  height: 29rem;
  border-radius: 50%;
  border: 6px solid #c1c1c1;
`

export const UserName = styled.h1`
  font-size: 3.1rem;
  font-weight: 700;
  margin: 0;
`

export const UserNickname = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #a0a0a0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`

export const UserPhrase = styled.p`
  font-size: 2rem;
  max-width: 29rem;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e4e8;
`
