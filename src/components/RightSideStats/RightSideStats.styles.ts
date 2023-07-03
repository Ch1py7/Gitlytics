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
  color: ${({ lightMode }) => (lightMode ? '#1e1e1e' : '#a9fef7')};
  outline: none;
  border-radius: 6px;
  background: ${({ lightMode }) => (lightMode ? '#fffefe' : '#141321')};
  border: ${({ lightMode }) => (lightMode ? '1px solid #b7b7b7' : '2px solid #b7b7b7')};
  font-size: 1.6rem;
  font-weight: 400;
`

export const Stats = styled.img`
  width: 90%;
`
