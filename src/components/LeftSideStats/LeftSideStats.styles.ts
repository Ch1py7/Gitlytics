import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}
export const LeftSideStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100%;
`

export const Title = styled.h2<LightMode>`
  color: ${({ lightMode }) => (lightMode ? '#161616' : '#efefef')};
  font-size: 3.6rem;
  font-weight: 700;
  text-decoration: ${({ lightMode }) => (lightMode ? 'underline #303030' : 'underline  #ababab')};
`

export const Stats = styled.img`
  width: 90%;
`
