export const calculatePieSegments = (
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
