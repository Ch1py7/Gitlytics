import { Icon } from '@iconify/react'
import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 70%;
    padding: 1rem 0;
    border: none;
    border-radius: 1rem;
    background: #2b2b2b;
  }
`

export const SearchInput = styled.input<LightMode>`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  border: none;
  border-radius: 6px;
  background: ${({ lightMode }) => (lightMode ? '#efefef' : '#2b2b2b')};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ lightMode }) => (lightMode ? '#1e1e1e' : '#f3f3f3')};
  outline: none;
  transition: all 0.2s ease-in-out;
`

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  font-size: 2.4rem;
  color: #909090;
  transform: translateY(-50%);
`

export const SearchButton = styled.button<LightMode>`
  position: absolute;
  top: 50%;
  right: 3.4rem;
  transform: translateY(-50%);
  display: block;
  margin: auto 0;
  padding: 1rem 1rem;
  border: 1px #4a4a4a solid;
  border-radius: 6px;
  background-color: transparent;
  font-size: 1.2rem;
  color: ${({ lightMode }) => (lightMode ? '#2b2b2b' : '#c8c8c8')};
  line-height: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
