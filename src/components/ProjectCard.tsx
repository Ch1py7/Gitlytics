import type { NodeElement } from '@/types'
import { GitFork, Star } from 'lucide-react'

export const ProjectCard: React.FC<NodeElement> = (project): React.ReactNode => {
	return (
		<div
			key={project.name}
			className='bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition hover:border-gray-600'
		>
			<div className='p-6'>
				<div className='flex items-center justify-between mb-4'>
					<h3 className='text-xl font-semibold'>{project.name}</h3>
				</div>
				<div className='flex gap-2'>
					{project.languages.edges.slice(0, 2).map((language) => (
						<span key={language.node.id} className='px-3 py-1 bg-gray-700 rounded-full text-sm'>
							{language.node.name}
						</span>
					))}
				</div>
				<p className='text-gray-400 mb-4 overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-3 break-words'>
					{project.description}
				</p>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<Star className='w-5 h-5 text-yellow-500' />
							<span>{project.stargazerCount}</span>
						</div>
						<div className='flex items-center gap-1'>
							<GitFork className='w-5 h-5 text-green-500' />
							<span>{project.forkCount}</span>
						</div>
					</div>
					<a
						href={project.url}
						target='_blank'
						rel='noreferrer'
						className='text-blue-400 hover:text-blue-300 transition'
					>
						View Details
					</a>
				</div>
			</div>
		</div>
	)
}
