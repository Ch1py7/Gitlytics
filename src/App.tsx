import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Information } from 'components/Information'
import { Navbar } from 'components/Navbar'
import { SearchUser } from 'components/SearchUser'
function App() {
  return (
    <div style={{ backgroundColor: '#1e1e1e' }}>
      <Navbar />
      <Header />
      <SearchUser />
      <Information />
      <Footer />
    </div>
  )
}

export default App
