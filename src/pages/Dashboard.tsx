import { DailyContributions } from '@/components/DailyContributions'
import { ProjectCard } from '@/components/ProjectCard'
import { Skeleton } from '@/components/Skeleton'
import { UserCard } from '@/components/UserCard'
import { Queries } from '@/graphql/queries'
import { useGithubQuery } from '@/hooks'
import type { Data } from '@/types'
import { Activity, BarChart3, RefreshCw, Search, UserX } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Dashboard: React.FC = (): React.ReactNode => {
	const [user, setUser] = useState('')
	const [searchUser, setSearchUser] = useState<string>('ch1py7')
	const [tech, setTech] = useState('')
	const [debouncedQuery, setDebouncedQuery] = useState<string>('ch1py7')
	const { data, loading, error } = useGithubQuery<Data>(Queries.getApiData(searchUser))

	const userHandleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setTech('')
		setSearchUser(user)
	}

	const filteredRepositories =
		data?.user.repositories.nodes.filter((repo) =>
			repo.languages.edges.some((lang) =>
				lang.node.name.toLowerCase().includes(debouncedQuery.toLowerCase())
			)
		) ?? []

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(tech)
		}, 500)

		return () => {
			clearTimeout(handler)
		}
	}, [tech])

	return (
		<main className='container mx-auto px-4 py-12 max-w-4xl'>
			<div className='max-w-2xl mx-auto text-center mb-12'>
				<h2 className='text-4xl font-bold mb-4'>Analyze GitHub Profiles</h2>
				<p className='text-gray-400 mb-8'>
					Get detailed insights and statistics for any GitHub user or repository
				</p>
				<form onSubmit={userHandleSubmit} className='flex gap-2 max-w-md mx-auto'>
					<div className='relative flex-1'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
						<input
							type='text'
							placeholder='Enter GitHub username'
							value={user}
							required
							onChange={(e) => setUser(e.target.value)}
							className='w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition'
						/>
					</div>
					<button
						type='submit'
						className='px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2'
						disabled={loading}
					>
						{loading ? 'Analyzing...' : 'Analyze'}
						{loading && <Activity className='animate-spin w-4 h-4' />}
					</button>
				</form>
			</div>
			{loading ? (
				<Skeleton />
			) : data ? (
				<>
					<UserCard user={data.user} />
					<div className='mx-auto mb-6 bg-gray-800 p-6 rounded-xl border border-gray-700'>
						<div className='flex items-center justify-between mb-6'>
							<div className='flex items-center gap-4'>
								<div className='p-3 bg-indigo-500/10 rounded-lg'>
									<BarChart3 className='w-6 h-6 text-indigo-500' />
								</div>
								<h3 className='font-semibold'>Contribution Activity</h3>
							</div>
						</div>
						<div className='flex items-end justify-between gap-2'>
							{data && <DailyContributions user={data.user} />}
						</div>
					</div>
					<input
						type='text'
						placeholder='Search by language'
						value={tech}
						onChange={(e) => setTech(e.target.value)}
						className='w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition mb-6'
					/>
					{debouncedQuery !== '' && (
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
							{filteredRepositories.map((repo) => (
								<ProjectCard key={repo.url} {...repo} />
							))}
						</div>
					)}
				</>
			) : (
				error && (
					<div className='max-w-2xl mx-auto'>
						<div className='bg-gray-800 rounded-xl p-8 border border-gray-700 text-center'>
							<div className='w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6'>
								<UserX className='w-10 h-10 text-gray-400' />
							</div>
							<h3 className='text-2xl font-bold mb-4'>User Not Found</h3>
							<p className='text-gray-400 mb-8'>
								We couldn't find a GitHub user with the username "{searchUser}". Please check the
								spelling and try again.
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
			)}
		</main>
	)
}
