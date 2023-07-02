import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Button = styled.a<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.4rem;
  height: auto;
  gap: 8px;
  background: ${({ lightMode }) => (lightMode ? '#cfcfcf' : '#30363d')};
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#e9e9e9')};
  border: ${({ lightMode }) => (lightMode ? '1px solid #161616' : '1px solid #8c8c8c')};
  border-radius: 20rem;
  padding: 8px 1.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ lightMode }) => (lightMode ? '#bababa' : '#202020')};
    scale: 1.1;
  }
`
