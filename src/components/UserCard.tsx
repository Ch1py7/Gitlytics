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
	0: '01',
	1: '02',
	2: '03',
	3: '04',
	4: '05',
	5: '06',
	6: '07',
	7: '08',
	8: '09',
	9: '10',
	10: '11',
	11: '12',
}

export const UserCard: React.FC<Data> = ({ user }): React.ReactElement => {
	return (
		<div className='mx-auto mb-6'>
			<div className='bg-gray-800 rounded-xl border border-gray-700'>
				<div className='flex flex-col md:flex-row gap-2 md:gap-4'>
					<a
						href={user.url}
						target='_blank'
						rel='noreferrer'
						className='flex flex-col w-full md:w-auto items-center md:items-start p-6 mx-auto border rounded-xl border-1 border-transparent hover:border-indigo-600 transition-border duration-100'
					>
						<img
							src={user.avatarUrl}
							alt='Profile'
							className='rounded-full mb-4 border-4 border-gray-700 aspect-square w-36 mx-auto'
						/>
						<h3 className='text-2xl w-40 font-bold overflow-hidden line-clamp-2 text-ellipsis whitespace-pre-wrap break-words text-center'>
							{user.name}
						</h3>
						<p className='text-gray-400 text-center w-full'>
							@{user.login}{' '}
							{user.pronouns && (
								<>
									<span className='text-gray-400 md:hidden'>· {user.pronouns}</span>
									<span className='text-gray-400 hidden md:inline'>({user.pronouns})</span>
								</>
							)}
						</p>
					</a>
					<div className='flex flex-col items-end w-full justify-between p-6 pt-0 md:p-6 md:ps-0'>
						<p className='text-gray-300 w-full overflow-hidden line-clamp-5 text-ellipsis whitespace-pre-wrap break-words mb-2 md:m-0'>
							{user.bio}
						</p>
						<div className='w-full'>
							<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-2 md:m-0'>
								{user.socialAccounts.edges.map((social) => (
									<a
										key={social.node.provider}
										href={social.node.url}
										target='_blank'
										rel='noreferrer'
										className='flex items-center gap-2'
									>
										{social.node.provider === 'LINKEDIN' && (
											<Linkedin className='w-5 h-5 text-blue-500' />
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
										<span className='md:hidden'>{social.node.provider.toLowerCase()}</span>
									</a>
								))}
							</div>
							<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-2 md:m-0'>
								{user.websiteUrl && (
									<div className='flex items-center gap-2 text-gray-400'>
										<LinkIcon className='w-5 h-5' />
										<a
											href={user.websiteUrl}
											target='_blank'
											rel='noreferrer'
											className='text-blue-400 hover:text-blue-300'
										>
											Website
										</a>
									</div>
								)}
								{user.email && (
									<div className='flex items-center gap-2 text-gray-400'>
										<Mail className='w-5 h-5' />
										<a href={`mailto:${user.email}`} className='text-blue-400 hover:text-blue-300'>
											Email
										</a>
									</div>
								)}
								{user.location && (
									<div className='flex items-center gap-2 text-gray-400'>
										<MapPin className='w-5 h-5' />
										<span>{user.location}</span>
									</div>
								)}
								<div className='flex items-center gap-2 text-gray-400'>
									<Calendar className='w-5 h-5' />
									<span>
										Joined {getMonth[new Date(user.createdAt).getMonth()]}
										{' / '}
										{new Date(user.createdAt).getFullYear()}
									</span>
								</div>
							</div>

							<div className='flex flex-col'>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4'>
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
