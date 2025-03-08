import type { NodeElement } from '@/types'
import { ExternalLink, GitFork, Star } from 'lucide-react'

export const ProjectCard: React.FC<NodeElement> = (project): React.ReactNode => {
	return (
		<div className='bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition overflow-hidden p-5 flex flex-col gap-2'>
			<div className='flex items-center justify-between'>
				<h3 className='text-xl font-semibold'>{project.name}</h3>
			</div>
			<div className='flex gap-2'>
				{project.languages.edges.slice(0, 2).map((language) => (
					<span key={language.node.id} className='px-3 py-1 bg-gray-700 rounded-full text-sm'>
						{language.node.name}
					</span>
				))}
			</div>
			<div className='flex-1'>
				<p className='text-gray-400 overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-3 break-words'>
					{project.description}
				</p>
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-1'>
						<Star className='w-5 h-5 text-yellow-500' />
						<span>{project.stargazerCount}</span>
					</div>
					<div className='flex items-center gap-1'>
						<GitFork className='w-5 h-5 text-green-500' />
						<span>{project.forkCount}</span>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					{project.homepageUrl && (
						<a
							href={project.homepageUrl}
							target='_blank'
							rel='noreferrer'
							className='text-blue-400 hover:text-blue-300 transition'
						>
							Web
						</a>
					)}
					<a
						href={project.url}
						target='_blank'
						rel='noreferrer'
						className='text-blue-400 hover:text-blue-300 transition'
					>
						{project.homepageUrl ? 'Repo' : 'Repository'}
					</a>
				</div>
			</div>
		</div>
	)
}
