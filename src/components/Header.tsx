import { Github } from 'lucide-react'

export const Header: React.FC = (): React.ReactNode => {
	return (
		<header className='container mx-auto px-4 py-8'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Github className='w-8 h-8' />
					<h1 className='text-2xl font-bold'>GitLytics</h1>
				</div>
			</div>
		</header>
	)
}
