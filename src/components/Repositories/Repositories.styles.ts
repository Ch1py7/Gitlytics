import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Repositories = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 2rem;
`

export const RepositoriesTitleSec = styled.h2<LightMode>`
  color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
  font-size: 3rem;
  font-weight: 700;
  text-decoration: ${({ lightMode }) => (lightMode ? 'underline #303030' : 'underline  #ababab')};
`

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 30rem;
  gap: 2rem;
`

export const Repository = styled.article<LightMode>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: ${({ lightMode }) => (lightMode ? '#efefef' : '#2b2b2b')};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`

export const RepositoryTitle = styled.h3<LightMode>`
  display: -webkit-box;
  color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
  font-size: 2rem;
  font-weight: 700;
  overflow: hidden;
  line-height: 2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`

export const RepoAnchor = styled.a<LightMode>`
  text-decoration: none;
  color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
  font-size: 1.6rem;
`

export const Buttons = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0 auto; 
`

export const Button = styled.button<LightMode>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
  color: ${({ lightMode }) => (lightMode ? '#efefef' : '#161616')};
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`
