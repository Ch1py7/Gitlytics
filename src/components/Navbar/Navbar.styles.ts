import styled from 'styled-components'

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 3.2rem 3.6rem;
  background: #212121;

  @media (max-width: 768px) {
    padding: 3.2rem;
  }
`
