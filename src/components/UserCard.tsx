import type { Data } from '@/types'
import {
	Calendar,
	GitFork,
	Instagram,
	Linkedin,
	LinkIcon,
	Mail,
	MapPin,
	Star,
	Twitch,
	Twitter,
	Users,
	Youtube,
} from 'lucide-react'

const getMonth: Record<string, string> = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December',
}

export const UserCard: React.FC<Data> = ({ user }): React.ReactElement => {
	return (
		<div className='mx-auto mb-6'>
			<div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
				<div className='flex flex-col md:flex-row gap-8'>
					<a
						href={user.url}
						target='_blank'
						rel='noreferrer'
						className='flex flex-col items-center md:items-start mx-auto'
					>
						<img
							src={user.avatarUrl}
							alt='Profile'
							className='rounded-full mb-4 border-4 border-gray-700 aspect-square w-36 mx-auto'
						/>
						<h3 className='text-2xl font-bold overflow-hidden line-clamp-2 text-ellipsis whitespace-pre-wrap break-words'>
							{user.name}
						</h3>
						<p className='text-gray-400'>@{user.login}</p>
					</a>
					<div className='flex flex-col items-end w-full justify-between'>
						<p className='text-gray-300 mb-6 w-full'>{user.bio}</p>
						<div className='w-full'>
							<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 w-full'>
								{user.location && (
									<div className='flex items-center gap-2 text-gray-400'>
										<MapPin className='w-5 h-5' />
										<span>{user.location}</span>
									</div>
								)}
								{user.websiteUrl && (
									<div className='flex items-center gap-2 text-gray-400'>
										<LinkIcon className='w-5 h-5' />
										<a
											href={user.websiteUrl}
											target='_blank'
											rel='noreferrer'
											className='text-blue-400 hover:text-blue-300'
										>
											{user.websiteUrl}
										</a>
									</div>
								)}
								{user.email && (
									<div className='flex items-center gap-2 text-gray-400'>
										<Mail className='w-5 h-5' />
										<a href={`mailto:${user.email}`} className='text-blue-400 hover:text-blue-300'>
											{user.email}
										</a>
									</div>
								)}
								<div className='flex items-center gap-2 text-gray-400'>
									<Calendar className='w-5 h-5' />
									<span>
										Joined {getMonth[new Date(user.createdAt).getMonth()]}{' '}
										{new Date(user.createdAt).getFullYear()}
									</span>
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end gap-y-2 xxs:gap-y-0 xxxs:gap-x-4 mb-6'>
									{user.socialAccounts.edges.map((social) => (
										<a
											key={social.node.provider}
											href={social.node.url}
											target='_blank'
											rel='noreferrer'
											className='flex items-center gap-2'
										>
											{social.node.provider === 'LINKEDIN' && (
												<Linkedin className='w-5 h-5 text-white' />
											)}
											{social.node.provider === 'TWITTER' && (
												<Twitter className='w-5 h-5 text-blue-500' />
											)}
											{social.node.provider === 'TWITCH' && (
												<Twitch className='w-5 h-5 text-purple-500' />
											)}
											{social.node.provider === 'INSTAGRAM' && (
												<Instagram className='w-5 h-5 text-white' />
											)}
											{social.node.provider === 'YOUTUBE' && (
												<Youtube className='w-5 h-5 text-red-500' />
											)}
											{social.node.displayName}
										</a>
									))}
								</div>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end gap-y-2 xxs:gap-y-0 xxxs:gap-x-4'>
									<div className='flex items-center gap-2'>
										<Users className='w-5 h-5 text-blue-500' />
										<span className='font-semibold'>
											{user.followers.totalCount.toLocaleString('en-US')}
										</span>
										<span className='text-gray-400'>followers</span>
									</div>
									<div className='flex items-center gap-2'>
										<Star className='w-5 h-5 text-yellow-500' />
										<span className='font-semibold'>
											{user.repositories.nodes
												.reduce((prev, curr) => prev + curr.stargazerCount, 0)
												.toLocaleString('en-US')}
										</span>
										<span className='text-gray-400'>stars</span>
									</div>
									<div className='flex items-center gap-2'>
										<GitFork className='w-5 h-5 text-green-500' />
										<span className='font-semibold'>
											{user.repositories.nodes
												.reduce((prev, curr) => prev + curr.forkCount, 0)
												.toLocaleString('en-US')}
										</span>
										<span className='text-gray-400'>forks</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
