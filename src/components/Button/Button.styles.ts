import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.4rem;
  height: auto;
  gap: 8px;
  background-color: #30363d;
  color: #e9e9e9;
  border: 1px solid #8c8c8c;
  border-radius: 20rem;
  padding: 8px 1.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #202020;
    scale: 1.1;
  }
`
