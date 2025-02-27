import type { NodeElement, Repositories } from '@/types'
import { Code2, PieChart } from 'lucide-react'

const calculateLanguagePercentage = (repositories: NodeElement[]) => {
	const languageUsage: Record<string, { size: number; color: string }> = {}

	repositories.forEach((repo) => {
		repo.languages.edges.forEach((lang) => {
			const { name, color } = lang.node
			const size = lang.size

			if (!languageUsage[name]) {
				languageUsage[name] = { size: 0, color }
			}

			languageUsage[name].size += size
		})
	})

	const totalSize = Object.values(languageUsage).reduce((sum, { size }) => sum + size, 0)

	const languagePercentage = Object.entries(languageUsage)
		.map(([name, data]) => ({
			language: name,
			percentage: Number(((data.size / totalSize) * 100).toFixed(2)),
			color: data.color,
		}))
		.sort(
			(a, b) =>
				Number.parseFloat(b.percentage.toString()) - Number.parseFloat(a.percentage.toString())
		)

	return languagePercentage
}

const calculatePieSegments = (
	technologies: {
		language: string
		percentage: number
		color: string
	}[]
) => {
	const total = technologies.reduce((sum, tech) => sum + tech.percentage, 0)
	let cumulativeAngle = 0

	return technologies.map((tech) => {
		const angle = (tech.percentage / total) * 360

		const startAngle = (cumulativeAngle * Math.PI) / 180
		cumulativeAngle += angle
		const endAngle = (cumulativeAngle * Math.PI) / 180

		const radius = 50
		const startX = 50 + radius * Math.sin(startAngle)
		const startY = 50 - radius * Math.cos(startAngle)
		const endX = 50 + radius * Math.sin(endAngle)
		const endY = 50 - radius * Math.cos(endAngle)

		const largeArcFlag = angle > 180 ? 1 : 0

		const path = `M50,50 L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`

		return {
			...tech,
			path,
			angle,
		}
	})
}

export const MostUsedTechs: React.FC<Repositories> = ({ nodes }): React.ReactElement => {
	const techs = calculateLanguagePercentage(nodes)
	const chart = calculatePieSegments(techs)
	const spare = 100 - techs.slice(0, 4).reduce((prev, curr) => prev + curr.percentage, 0)
	return (
		<div className='bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8'>
			<div className='flex items-center gap-4 mb-6'>
				<div className='p-3 bg-purple-500/10 rounded-lg'>
					<Code2 className='w-6 h-6 text-purple-500' />
				</div>
				<h3 className='font-semibold'>Most Used Technologies</h3>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='relative flex items-center justify-center'>
					<div className='w-64 h-64 rounded-full border-8 border-gray-700 flex items-center justify-center relative'>
						<svg viewBox='0 0 100 100' className='absolute inset-0 w-full h-full'>
							{techs.length > 4 && <circle cx='50' cy='50' r='49.9' fill='white' />}
							<title>pie chart</title>
							{chart.slice(0, 4).map((tech) => (
								<path d={tech.path} fill={tech.color} key={tech.language} />
							))}
							<circle cx='50' cy='50' r='30' fill='#1F2937' />
						</svg>
						<div className='z-10 text-center'>
							<PieChart className='w-8 h-8 mx-auto mb-2 text-gray-400' />
							<p className='text-sm text-gray-400'>
								Language
								<br />
								Distribution
							</p>
						</div>
					</div>
				</div>
				<div className='space-y-4'>
					{techs.slice(0, 4).map((tech) => (
						<div key={tech.language} className='space-y-2'>
							<div className='flex justify-between'>
								<span className='font-medium'>{tech.language}</span>
								<span className='text-gray-400'>{tech.percentage}%</span>
							</div>
							<div className='h-2 w-full bg-gray-700 rounded-full overflow-hidden'>
								<div
									className='h-full rounded-full'
									style={{ width: `${tech.percentage}%`, backgroundColor: tech.color }}
								/>
							</div>
						</div>
					))}
					{techs.length > 4 && (
						<div className='space-y-2'>
							<div className='flex justify-between'>
								<span className='font-medium'>Others</span>
								<span className='text-gray-400'>{spare.toFixed(2)}%</span>
							</div>
							<div className='h-2 w-full bg-gray-700 rounded-full overflow-hidden'>
								<div
									className='h-full rounded-full'
									style={{ width: `${spare}%`, backgroundColor: 'white' }}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
