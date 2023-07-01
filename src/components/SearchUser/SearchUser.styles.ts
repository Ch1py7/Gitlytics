import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const SearchUser = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  gap: 4rem;
`

export const SearchTitle = styled.h2<LightMode>`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
  @media (max-width: 768px) {
    font-size: 3.6rem;
    line-height: 4rem;
  }
`

export const SearchForm = styled.form<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 8px;
  border-radius: 6px;
  background: ${({ lightMode }) => (lightMode ? '#efefef' : '#2b2b2b')};
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 1280px) {
    width: 60%;
  }
`

export const SearchInput = styled.input<LightMode>`
  width: 100%;
  padding: 0 1.2rem;
  border: none;
  background-color: transparent;
  font-size: 3rem;
  color: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
  line-height: 3.6rem;
  outline: 0;
`

export const SearchButton = styled.button<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 1.2px;
  border: ${({ lightMode }) => (lightMode ? '1px solid #0a0a0a' : '1px solid #f3f3f3')};
  border-radius: 6px;
  background: transparent;
  font-weight: 600;
  color: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
    color: ${({ lightMode }) => (lightMode ? '#f3f3f3' : '#0a0a0a')};
  }
`
