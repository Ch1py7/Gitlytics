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
						<div className='flex gap-x-1 flex-row md:flex-col'>
							<p className='text-gray-400'>@{user.login} </p>
							{user.pronouns && <span className='text-gray-400'>· {user.pronouns}</span>}
						</div>
					</a>
					<div className='flex flex-col items-end w-full justify-between'>
						<p className='text-gray-300 mb-6 w-full overflow-hidden line-clamp-5 text-ellipsis whitespace-pre-wrap break-words'>
							{user.bio}
						</p>
						<div className='w-full'>
							<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 mb-1 xxs:mb-1 w-full'>
								<div className='flex items-center gap-2 text-gray-400'>
									{user.websiteUrl && (
										<>
											<LinkIcon className='w-5 h-5' />
											<a
												href={user.websiteUrl}
												target='_blank'
												rel='noreferrer'
												className='text-blue-400 hover:text-blue-300'
											>
												Website
											</a>
										</>
									)}
								</div>
								<div className='flex items-center gap-2 text-gray-400'>
									{user.email && (
										<>
											<Mail className='w-5 h-5' />
											<a
												href={`mailto:${user.email}`}
												className='text-blue-400 hover:text-blue-300'
											>
												E-mail
											</a>
										</>
									)}
								</div>
								<div className='flex items-center gap-2 text-gray-400'>
									{user.location && (
										<>
											<MapPin className='w-5 h-5' />
											<span>{user.location}</span>
										</>
									)}
								</div>
								<div className='flex items-center gap-2 text-gray-400'>
									<Calendar className='w-5 h-5' />
									<span>
										Joined {getMonth[new Date(user.createdAt).getMonth()]}
										{' / '}
										{new Date(user.createdAt).getFullYear()}
									</span>
								</div>
							</div>
							<div className='flex flex-col md:gap-1'>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-1 xxs:mb-1'>
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
