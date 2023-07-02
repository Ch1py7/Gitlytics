import { createContext,  Dispatch, SetStateAction } from 'react'

interface LightModeContextState {
  lightMode: boolean
  setLightMode: Dispatch<SetStateAction<boolean>>
}

export const LightModeContext = createContext<LightModeContextState>({
  lightMode: false,
  setLightMode: () => {}
})