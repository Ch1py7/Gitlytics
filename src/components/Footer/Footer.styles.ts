import { Icon } from '@iconify/react'
import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  border-top: 1px solid #828282;
`

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2rem 0;
  align-items: flex-start;
  width: 66.666667%;
  gap: 0.5rem;
`

export const FooterSmall = styled.small<LightMode>`
  font-size: 1.2rem;
  color: ${({ lightMode }) => (lightMode ? '#202020' : '#c4c4c4')};
  line-height: 1.6rem;
`

export const Heart = styled(Icon)`
  color: #ff0000;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 2px #ff0000);
  }
`
