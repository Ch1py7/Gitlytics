import type { GistsNode } from '@/types'
import { ExternalLink, FileCode, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

const uniqueLanguages = (languages: GistsNode['edges'][0]['node']['files']) => {
	const unique = [...new Set(languages.map((item) => item.language?.name ?? ''))]
	return unique
}

interface GistsProps {
	gists: GistsNode['edges']
	showAll: boolean
	setShowAll: React.Dispatch<React.SetStateAction<boolean>>
}

export const Gists: React.FC<GistsProps> = ({ gists, setShowAll, showAll }): React.ReactElement => {
	const [gistSearch, setGistSearch] = useState('')
	const memoizedGists = useMemo(() => gists ?? [], [gists])

	const filteredGists = useMemo(() => {
		return memoizedGists.filter(
			({ node }) =>
				node.files[0].name.toLowerCase().includes(gistSearch.toLowerCase()) ||
				node.description?.toLowerCase().includes(gistSearch.toLowerCase()) ||
				uniqueLanguages(node.files).some((l) => l.toLowerCase().includes(gistSearch.toLowerCase()))
		)
	}, [gistSearch, memoizedGists])

	return (
		<div className='bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8'>
			<div className='flex items-center justify-between mb-6 flex-col xs:flex-row gap-4 xs:gap-0'>
				<div className='flex items-center gap-4'>
					<div className='p-3 bg-blue-500/10 rounded-lg'>
						<FileCode className='w-6 h-6 text-blue-500' />
					</div>
					<h3 className='font-semibold'>Gists</h3>
				</div>
				<div className='relative w-full xs:w-auto'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
					<input
						type='text'
						placeholder='Search gists...'
						value={gistSearch}
						onChange={(e) => setGistSearch(e.target.value)}
						className='pl-9 pr-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition text-sm w-full xs:w-72'
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:md:col-span-2'>
				{(showAll ? filteredGists : filteredGists.slice(0, 6)).map(({ node }) => (
					<a
						key={node.id}
						href={node.url}
						target='_blank'
						rel='noopener noreferrer'
						className='block'
					>
						<div className='bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition group h-full flex flex-col justify-between'>
							<div className='flex items-start justify-between mb-2'>
								<div>
									<div className='flex items-center gap-2 mb-1'>
										<h4 className='font-medium text-blue-400 group-hover:text-blue-300 transition'>
											{node.files[0].name}
										</h4>
										{uniqueLanguages(node.files).map((lang) => (
											<span key={lang} className='px-2 py-0.5 bg-gray-800 rounded text-xs'>
												{lang}
											</span>
										))}
									</div>
									<p className='text-sm text-gray-400'>{node.description}</p>
								</div>
								<div className='text-gray-500 hover:text-gray-300 transition'>
									<ExternalLink className='w-4 h-4' />
								</div>
							</div>
							<div className='flex items-center gap-4 text-sm text-gray-500'>
								<span>
									{node.files.length} {node.files.length === 1 ? 'file' : 'files'}
								</span>
								<span>{node.comments.totalCount} comments</span>
								<span>Created on {new Date(node.createdAt).toLocaleDateString()}</span>
							</div>
						</div>
					</a>
				))}
			</div>
			{filteredGists.length > 6 && (
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
