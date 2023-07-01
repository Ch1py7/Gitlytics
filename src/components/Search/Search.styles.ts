import { Icon } from '@iconify/react'
import styled from 'styled-components'

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.4rem;
  padding: 4px 1.2rem 4px 2rem;
  gap: 2rem;
  border-left: 1px #c8c8c8 solid;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 70%;
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    background: #2b2b2b;
  }
`

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  color: #f3f3f3;
  outline: none;
`

export const SearchIcon = styled(Icon)`
  position: relative;
  font-size: 2.4rem;
  color: #909090;
  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
  }
`

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2.5rem;
  transform: translateY(-50%);
  display: block;
  margin: auto 0;
  padding: 1rem 1rem;
  border: 1px #4a4a4a solid;
  border-radius: 6px;
  background-color: transparent;
  font-size: 1.2rem;
  color: #c8c8c8;
  line-height: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
