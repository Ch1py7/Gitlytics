import type { NodeElement } from '@/types'
import { Code, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ProjectCard } from './ProjectCard'

interface ProjectsProps {
	projects: NodeElement[]
	showAll: boolean
	setShowAll: React.Dispatch<React.SetStateAction<boolean>>
}

export const Projects: React.FC<ProjectsProps> = ({
	projects,
	setShowAll,
	showAll,
}): React.ReactElement => {
	const [projectSearch, setProjectSearch] = useState('')
	const memoizedProjects = useMemo(() => projects ?? [], [projects])

	const filteredProjects = useMemo(() => {
		return memoizedProjects.filter(
			(project) =>
				project.name.toLowerCase().includes(projectSearch.toLowerCase()) ||
				project.description?.toLowerCase().includes(projectSearch.toLowerCase()) ||
				project.languages.edges.some((lang) =>
					lang.node.name.toLowerCase().includes(projectSearch.toLowerCase())
				)
		)
	}, [projectSearch, memoizedProjects])

	return (
		<div className='bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex items-center gap-4'>
					<div className='p-3 bg-red-500/10 rounded-lg'>
						<Code className='w-6 h-6 text-red-500' />
					</div>
					<h3 className='font-semibold'>Projects</h3>
				</div>
				<div className='relative'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
					<input
						type='text'
						placeholder='Search projects...'
						value={projectSearch}
						onChange={(e) => setProjectSearch(e.target.value)}
						className='pl-9 pr-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition text-sm w-64'
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:md:col-span-2'>
				{(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
			{filteredProjects.length > 6 && (
				<button
					type='button'
					onClick={() => setShowAll((prev) => !prev)}
					className='mt-3 mx-auto block text-blue-400 hover:text-blue-300'
				>
					{showAll ? 'show less' : 'show all'}
				</button>
			)}
		</div>
	)
}
