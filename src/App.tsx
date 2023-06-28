import { Footer } from 'components/Footer'
import { GithubData } from 'components/GithubData'
import { Header } from 'components/Header'
import { Information } from 'components/Information'
import { Navbar } from 'components/Navbar'
import { SearchUser } from 'components/SearchUser'
import { FC, useState } from 'react'

export const App: FC = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <div style={{ backgroundColor: '#1e1e1e' }}>
      <Navbar />
      <Header />
      <SearchUser setSearch={setSearch} />
      {search ? <GithubData search={search} /> : null}
      <Information />
      <Footer />
    </div>
  )
}
