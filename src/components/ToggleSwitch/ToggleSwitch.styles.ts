import styled from 'styled-components'

interface ToogleSwitchProps {
  isActive: boolean
}

export const ToggleSwitch = styled.button<ToogleSwitchProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 1.2rem;
  background-color: ${({ isActive }) => (isActive ? '#bbbbbb' : '#2D2D2D')};
  cursor: pointer;
`

export const IconContainer = styled.div<ToogleSwitchProps>`
  position: absolute;
  left: ${({ isActive }) => (isActive ? '2rem' : '4px')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;
`
