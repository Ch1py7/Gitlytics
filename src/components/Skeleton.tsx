export const Skeleton: React.FC = (): React.ReactNode => {
	return (
		<div className='max-w-6xl mx-auto'>
			{/* user card */}
			<div className='mx-auto mb-6 animate-pulse'>
				<div className='bg-gray-800 rounded-xl border border-gray-700'>
					<div className='flex flex-col md:flex-row gap-2 md:gap-4'>
						<div className='flex flex-col w-full md:w-auto items-center md:items-start p-6 mx-auto border rounded-xl border-1 border-transparent hover:border-indigo-600 transition-border duration-100'>
							<div className='w-32 h-32 rounded-full bg-gray-700 mb-4' />
							<div className='h-8 w-32 bg-gray-700 rounded mb-2' />
							<div className='h-6 w-24 mx-auto bg-gray-700 rounded mb-4' />
						</div>
						<div className='flex flex-col items-end w-full justify-between p-6 pt-0 md:p-6 md:ps-0'>
							<div className='h-20 bg-gray-700 rounded mb-6 w-full' />
							<div className='w-full flex flex-col gap-2'>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-2 md:m-0'>
									{[...new Array(3)].map((_, i) => (
										<div key={i} className='flex items-center gap-2'>
											<div className='w-5 h-5 bg-gray-700' />
											<span className='md:hidden h-5 w-24 bg-gray-700 rounded' />
										</div>
									))}
								</div>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-2 md:m-0'>
									{[...new Array(2)].map((_, i) => (
										<div key={i} className='flex items-center gap-2'>
											<div className='w-5 h-5 bg-gray-700' />
											<span className='h-5 w-24 bg-gray-700 rounded' />
										</div>
									))}
								</div>
								<div className='flex flex-col xs:flex-row justify-start md:justify-end xxxs:gap-x-4 mb-2 md:m-0'>
									{[...new Array(3)].map((_, i) => (
										<div key={i} className='flex items-center gap-2'>
											<div className='w-5 h-5 bg-gray-700' />
											<span className='h-5 w-24 bg-gray-700 rounded' />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* user technologies */}
			<div className='bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8 animate-pulse'>
				<div className='flex items-center gap-4'>
					<div className='w-12 h-12 bg-gray-700 rounded-lg' />
					<div className='h-6 w-40 bg-gray-700 rounded' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-3'>
					<div className='relative flex items-center justify-center'>
						<div className='w-64 h-64 rounded-full border-8 border-gray-700 flex items-center justify-center relative'>
							<svg viewBox='0 0 100 100' className='absolute inset-0 w-full h-full'>
								<circle cx='50' cy='50' r='49.9' fill='#1F2937' />
								<title>pie chart</title>
								<circle cx='50' cy='50' r='30' fill='#1F2937' />
							</svg>
							<div className='z-10 text-center'>
								<div className='w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-2' />
								<div className='h-4 w-20 mx-auto bg-gray-700 rounded mb-1' />
								<div className='h-4 w-20 mx-auto bg-gray-700 rounded' />
							</div>
						</div>
					</div>
					<div className='space-y-4'>
						{[...new Array(4)].map((_, i) => (
							<div key={i} className='space-y-2'>
								<div className='flex justify-between'>
									<div className='h-5 w-32 bg-gray-700 rounded mb-2' />
									<div className='h-5 w-8 bg-gray-700 rounded mb-2' />
								</div>
								<div className='h-2 w-full bg-gray-700 rounded-full overflow-hidden'>
									<div
										className='h-full rounded-full bg-gray-500'
										style={{ width: `${25 * (i + 1)}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* user contribution */}
			<div className='bg-gray-800 h-64 p-6 rounded-xl border border-gray-700 mb-6 animate-pulse'>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 bg-gray-700 rounded-lg' />
						<div className='h-6 w-40 bg-gray-700 rounded' />
					</div>
				</div>
				<div className='h-32 bg-gray-700 rounded' />
			</div>
			{/* user gists */}
			<div className='bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6 animate-pulse'>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 bg-gray-700 rounded-lg' />
						<div className='h-6 w-40 bg-gray-700 rounded' />
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:md:col-span-2'>
					{[...new Array(6)].map((_, i) => (
						<div key={i} className='h-20 bg-gray-700 rounded' />
					))}
				</div>
			</div>
			{/* user projects */}
			<div className='bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6 animate-pulse'>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 bg-gray-700 rounded-lg' />
						<div className='h-6 w-40 bg-gray-700 rounded' />
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:md:col-span-2'>
					{[...new Array(6)].map((_, i) => (
						<div key={i} className='h-32 bg-gray-700 rounded' />
					))}
				</div>
			</div>
		</div>
	)
}
