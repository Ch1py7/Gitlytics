import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const FirstContributionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
  place-items: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
`

export const BugBounty = styled.div<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  padding: 0.7rem 0;
  background: ${({ lightMode }) => (lightMode ? '#cfcfcf' : '#30363d')};
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#e9e9e9')};
  border: ${({ lightMode }) => (lightMode ? '1px solid #161616' : '1px solid #8c8c8c')};
  border-radius: 1rem;
  border: 1px solid #8c8c8c;
  font-weight: 700;
  gap: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ lightMode }) => (lightMode ? '#bababa' : '#202020')};
    scale: 1.1;
  }
`

export const FirstOf = styled.a<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  padding: 0.7rem 0;
  background: ${({ lightMode }) => (lightMode ? '#cfcfcf' : '#30363d')};
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#e9e9e9')};
  border: ${({ lightMode }) => (lightMode ? '1px solid #161616' : '1px solid #8c8c8c')};
  border-radius: 1rem;
  border: 1px solid #8c8c8c;
  font-weight: 700;
  gap: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ lightMode }) => (lightMode ? '#bababa' : '#202020')};
    scale: 1.1;
  }
`
