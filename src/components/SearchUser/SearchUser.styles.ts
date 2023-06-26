import styled from 'styled-components'

export const SearchUser = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  gap: 4rem;
`

export const SearchTitle = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: #f3f3f3;
  @media (max-width: 768px) {
    font-size: 3.6rem;
    line-height: 4rem;
  }
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 8px;
  border-radius: 6px;
  background: #2b2b2b;
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 0 1.2rem;
  border: none;
  background-color: transparent;
  font-size: 3rem;
  color: #f3f3f3;
  line-height: 3.6rem;
  outline: 0;
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 1.2px;
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  background: transparent;
  font-weight: 600;
  color: #f3f3f3;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
    color: #0a0a0a;
  }
`
