import type { NodeElement } from '@/types'

export const calculateLanguagePercentage = (repositories: NodeElement[]) => {
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
