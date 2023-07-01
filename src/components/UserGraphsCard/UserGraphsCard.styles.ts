import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const UserGraphsCard = styled.div<LightMode>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 18px;
  border: 8px solid #828282;
  background: ${({ lightMode }) => (lightMode ? '#eaeaea' : '#151515')};
  color: #efefef;
`
