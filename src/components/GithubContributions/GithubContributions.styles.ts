import styled from 'styled-components'

interface GithubContributionsProps {
  sqColor: string
}

export const GithubContributions = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`

export const GithubSquareWeeks = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const GithubSquareDays = styled.article<GithubContributionsProps>`
  background-color: ${(props) => `${props.sqColor}`};
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 2px;
  &:hover {
    opacity: 0.8;
  }
`
