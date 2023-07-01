import { Footer } from 'components/Footer'
import { GithubData } from 'components/GithubData'
import { Header } from 'components/Header'
import { Navbar } from 'components/Navbar'
import { SearchUser } from 'components/SearchUser'
import { LightModeContext } from 'context'
import { FC, useState } from 'react'

export const App: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [lightMode, setLightMode] = useState<boolean>(false)

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      <div
        style={{
          backgroundColor: `${lightMode ? '#fafafa' : '#1e1e1e'}`,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Navbar />
        <Header />
        <SearchUser setSearch={setSearch} />
        {search ? <GithubData search={search} /> : null}
        <Footer />
      </div>
    </LightModeContext.Provider>
  )
}
