import { Navbar } from 'components/Navbar'
import { Header } from 'components/Header'
import { SearchUser } from 'components/SearchUser'
import { Information } from 'components/Information'
import { Footer } from 'components/Footer'

function App() {
  return (
    <div style={{backgroundColor: '#1e1e1e'}}>
      <Navbar />
      <Header />
      <SearchUser />
      <Information />
      <Footer />
    </div>
  )
}

export default App
