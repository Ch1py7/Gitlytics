import type { Data } from '@/types'
import { colors } from '@/utils'

interface DailyContributionsProps {
	user: Data['user']
}

export const DailyContributions: React.FC<DailyContributionsProps> = ({
	user,
}): React.ReactNode => {
	const { contributionCalendar } = user.contributionsCollection

	return (
		<ul className='flex gap-1 justify-center bg-indigo-500/20 pb-4 pt-6 px-2 rounded-lg mx-auto relative'>
			<div className='absolute top-1 ps-2 left-0 text-xs'>
				{contributionCalendar.months[0].name}
			</div>
			{contributionCalendar.weeks.map((week) => (
				<li key={week.firstDay} className='flex flex-col gap-1 relative'>
					{week.contributionDays.map((day) => {
						const month = contributionCalendar.months.find((m) => day.date === m.firstDay)

						return (
							<div key={day.date}>
								{month && <div className='absolute -top-5 left-0 text-xs'>{month.name}</div>}
								<article
									className='transition-all duration-200 ease-in-out rounded-sm w-[11px] h-[11px] hover:scale-110 dailyContribution'
									title={`${day.date}\nContributions: ${day.contributionCount}`}
									style={{ backgroundColor: colors[day.color] }}
								/>
							</div>
						)
					})}
				</li>
			))}
		</ul>
	)
}
