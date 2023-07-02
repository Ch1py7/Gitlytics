import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const RightSideStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`

export const Input = styled.input<LightMode>`
  width: 90%;
  height: 5rem;
  padding: 0 2rem;
  color: ${({ lightMode }) => (lightMode ? '#1e1e1e' : '#f3f3f3')};
  outline: none;
  border-radius: 1rem;
  background-color: ${({ lightMode }) => (lightMode ? '#dfdfdf' : '#1e1e1e')};
  border: 1px solid #8e8e8e;
  font-size: 1.6rem;
  font-weight: 400;
`

export const Stats = styled.img`
  width: 90%;
`
