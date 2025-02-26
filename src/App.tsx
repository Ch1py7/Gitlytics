import { Header } from '@/components/Header'
import { Footer } from './components/Footer'
import { Dashboard } from './pages/Dashboard'

export const App: React.FC = (): React.ReactNode => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
			<Header />
			<Dashboard />
			<Footer />
		</div>
	)
}
