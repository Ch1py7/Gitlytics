import { RefreshCw, UserX } from 'lucide-react'

interface UserNotFoundProps {
  searchUser: string
  setSearchUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserNotFound: React.FC<UserNotFoundProps> = ({ searchUser, setSearchUser }): React.ReactNode => {
	return (
		<div className='max-w-2xl mx-auto'>
			<div className='bg-gray-800 rounded-xl p-8 border border-gray-700 text-center'>
				<div className='w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6'>
					<UserX className='w-10 h-10 text-gray-400' />
				</div>
				<h3 className='text-2xl font-bold mb-4'>User Not Found</h3>
				<p className='text-gray-400 mb-8'>
					We couldn't find a GitHub user with the username "{searchUser}". Please check the spelling
					and try again.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<button
						type='button'
						onClick={() => setSearchUser(searchUser)}
						className='px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2'
					>
						<RefreshCw className='w-5 h-5' />
						Try Again
					</button>
					<a
						href='https://github.com/search?type=users'
						target='_blank'
						rel='noopener noreferrer'
						className='px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition'
					>
						Search GitHub Users
					</a>
				</div>
			</div>
		</div>
	)
}
