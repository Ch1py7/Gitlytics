import { DailyContributions } from '@/components/DailyContributions'
import { Gists } from '@/components/Gists'
import { MostUsedTechs } from '@/components/MostUsedTechs'
import { Projects } from '@/components/Projects'
import { Skeleton } from '@/components/Skeleton'
import { UserCard } from '@/components/UserCard'
import { UserNotFound } from '@/components/UserNotFound'
import { Queries } from '@/graphql/queries'
import { useGithubQuery } from '@/hooks'
import type { Data } from '@/types'
import { Activity, BarChart3, Search } from 'lucide-react'
import { useState } from 'react'

export const Dashboard: React.FC = (): React.ReactNode => {
	const [user, setUser] = useState('')
	const [searchUser, setSearchUser] = useState<string>('ch1py7')
	const [tech, setTech] = useState('')
	const { data, loading, error } = useGithubQuery<Data>(Queries.getApiData(searchUser))
	const [showAllGists, setShowAllGists] = useState(false)
	const [showAllProjects, setShowAllProjects] = useState(false)

	const userHandleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setTech('')
		setShowAllGists(false)
		setShowAllProjects(false)
		setSearchUser(user)
	}

	return (
		<main className='container mx-auto px-4 py-12 max-w-4xl'>
			<div className='max-w-2xl mx-auto text-center mb-12'>
				<h2 className='text-4xl font-bold mb-4'>Analyze GitHub Profiles</h2>
				<p className='text-gray-400 mb-8'>
					Get detailed insights and statistics for any GitHub user or repository
				</p>
				<form
					onSubmit={userHandleSubmit}
					className='flex flex-col xxs:flex-row gap-2 max-w-md mx-auto'
				>
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
						className='px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2 justify-center'
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
					{data.user.repositories.nodes.length > 0 && (
						<MostUsedTechs nodes={data.user.repositories.nodes} />
					)}
					{data.user.gists.edges.length > 0 && (
						<Gists
							gists={data.user.gists.edges}
							setShowAll={setShowAllGists}
							showAll={showAllGists}
						/>
					)}
					<Projects
						projects={data.user.repositories.nodes}
						showAll={showAllProjects}
						setShowAll={setShowAllProjects}
					/>
					<div className='mx-auto mb-6 bg-gray-800 p-6 rounded-xl border border-gray-700 hidden md:block'>
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
				</>
			) : (
				error && <UserNotFound searchUser={searchUser} setSearchUser={setSearchUser} />
			)}
		</main>
	)
}
