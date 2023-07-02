import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}
export const Navbar = styled.div<LightMode>`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 3.2rem 3.6rem;
  background: ${({ lightMode }) => (lightMode ? 'transparent' : '#212121')};
  border-bottom: ${({ lightMode }) => (lightMode ? '1px solid #333' : '1px solid transparent')};
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 3.2rem;
  }
`
