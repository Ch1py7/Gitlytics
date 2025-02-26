import type { Data } from '@/types'
import { colors } from '@/utils'

export const DailyContributions: React.FC<Data> = ({ user }): React.ReactNode => {
	const { contributionCalendar } = user.contributionsCollection
	return (
		<ul className='flex gap-1 justify-center bg-indigo-500/20 py-4 px-2 rounded-lg mx-auto'>
			{contributionCalendar.weeks.map((week, index) => (
				<li className='flex flex-col gap-1' key={index}>
					{week.contributionDays.map((day, index) => (
						<article
							className='transition rounded-sm w-[11px] h-[11px]'
							key={index}
							title={`${day.date}\nContributions: ${day.contributionCount}`}
							style={{ backgroundColor: colors[day.color] }}
						/>
					))}
				</li>
			))}
		</ul>
	)
}
