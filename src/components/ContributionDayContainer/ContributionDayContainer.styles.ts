import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const ContributionDayContainer = styled.div<LightMode>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 9rem;
  margin-top: 1rem;
  gap: 5px;
  padding: 0 2rem;
  background: ${({ lightMode }) => (lightMode ? '#fffefe' : '#141321')};
  border: ${({ lightMode }) => (lightMode ? '1px solid #b7b7b7' : '2px solid #b7b7b7')};
  border-radius: 6px;
`

export const ContributionDay = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4rem;
`

export const ContributionDayText = styled.p<LightMode>`
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#a9fef7')};
  font-size: 1.6rem;
  font-weight: 600;
`
