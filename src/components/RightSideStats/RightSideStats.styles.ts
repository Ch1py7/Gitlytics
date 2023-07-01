import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const RightSideStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 3rem;
`

export const Input = styled.input<LightMode>`
  width: 90%;
  height: 5rem;
  border-radius: 1rem;
  background-color: ${({ lightMode }) => (lightMode ? '#dfdfdf' : '#1e1e1e')};
  border: 1px solid #8e8e8e;
`

export const Stats = styled.img`
  width: 90%;
`
