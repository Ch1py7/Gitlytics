import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const GithubData = styled.section<LightMode>`
  display: flex;
  justify-content: center;
  color: ${({ lightMode }) => (lightMode ? '#181818' : '#efefef')};
  gap: 6rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1620px) {
    flex-direction: column;
  }
`
