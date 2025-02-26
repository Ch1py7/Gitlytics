export const Skeleton: React.FC = (): React.ReactNode => {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6 animate-pulse'>
				<div className='flex flex-col md:flex-row gap-8'>
					<div className='flex flex-col items-center md:items-start'>
						<div className='w-32 h-32 rounded-full bg-gray-700 mb-4' />
						<div className='h-8 w-48 bg-gray-700 rounded mb-2' />
						<div className='h-6 w-32 bg-gray-700 rounded mb-4' />
						<div className='w-full md:w-32 h-10 bg-gray-700 rounded-lg' />
					</div>
					<div className='flex-1'>
						<div className='h-20 bg-gray-700 rounded mb-6' />
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
							{[...new Array(4)].map((_, i) => (
								<div key={i} className='flex items-center gap-2'>
									<div className='w-5 h-5 bg-gray-700 rounded' />
									<div className='h-5 w-32 bg-gray-700 rounded' />
								</div>
							))}
						</div>
						<div className='flex flex-wrap gap-4'>
							{[...new Array(3)].map((_, i) => (
								<div key={i} className='flex items-center gap-2'>
									<div className='w-5 h-5 bg-gray-700 rounded' />
									<div className='h-5 w-24 bg-gray-700 rounded' />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-800 h-64 p-6 rounded-xl border border-gray-700 mb-6'>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 bg-gray-700 rounded-lg' />
						<div className='h-6 w-40 bg-gray-700 rounded' />
					</div>
				</div>
				<div className='h-32 bg-gray-700 rounded' />
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
				{[...new Array(3)].map((_, i) => (
					<div key={i} className='bg-gray-800 rounded-xl overflow-hidden border border-gray-700'>
						<div className='h-48 bg-gray-700' />
						<div className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<div className='h-6 w-32 bg-gray-700 rounded' />
								<div className='h-6 w-16 bg-gray-700 rounded-full' />
							</div>
							<div className='h-16 bg-gray-700 rounded mb-4' />
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-4'>
									<div className='h-5 w-16 bg-gray-700 rounded' />
									<div className='h-5 w-16 bg-gray-700 rounded' />
								</div>
								<div className='h-5 w-24 bg-gray-700 rounded' />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
