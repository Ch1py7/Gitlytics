export interface Data {
	user: User
}

interface User {
	avatarUrl: string
	login: string
	bio: string
	createdAt: string
	contributionsCollection: ContributionsCollection
	email: string
	id: string
	pronouns: string
	isBountyHunter: boolean
	location: string
	name: string
	repositories: Repositories
	socialAccounts: SocialAccounts
	twitterUsername: string
	url: string
	websiteUrl: string
	followers: Followers
	gists: GistsNode
}

export interface GistsNode {
	edges: {
		node: {
			id: string
			name: string
			url: string
			description: string
			createdAt: string
			comments: { totalCount: number }
			files: {
				name: string
				language: {
					name: string
				}
			}[]
		}
	}[]
}

interface ContributionsCollection {
	contributionCalendar: ContributionCalendar
	contributionYears: number[]
	firstIssueContribution: FirstIssueContribution
	firstPullRequestContribution: FirstPullRequestContribution
	firstRepositoryContribution: FirstRepositoryContribution
	totalCommitContributions: number
}

interface ContributionCalendar {
	colors: string[]
	isHalloween: boolean
	months: Month[]
	totalContributions: number
	weeks: Week[]
}

interface Followers {
	totalCount: number
}

interface Month {
	firstDay: Date
	name: string
	totalWeeks: number
	year: number
}

interface Week {
	contributionDays: ContributionDay[]
	firstDay: Date
}

interface ContributionDay {
	color: string
	contributionCount: number
	contributionLevel: ContributionLevel
	date: Date
	weekday: number
}

export enum ContributionLevel {
	FirstQuartile = 'FIRST_QUARTILE',
	FourthQuartile = 'FOURTH_QUARTILE',
	None = 'NONE',
	SecondQuartile = 'SECOND_QUARTILE',
	ThirdQuartile = 'THIRD_QUARTILE',
}

interface FirstRepositoryContribution {
	__typename: string
	url: string
	occurredAt: Date
	repository: Repository
}

interface FirstPullRequestContribution {
	__typename: string
	url: string
	occurredAt: Date
	pullRequest: PullRequest
}

interface FirstIssueContribution {
	__typename: string
	url: string
	occurredAt: Date
	issue: Issue
}

interface Repository {
	url: string
}

interface PullRequest {
	url: string
}

interface Issue {
	url: string
}

export interface Repositories {
	nodes: NodeElement[]
}

interface NodeElement {
	languages: Languages
	name: string
	url: string
	description: string
	homepageUrl: string
	stargazerCount: number
	forkCount: number
}

interface Languages {
	edges: LanguagesEdge[]
}

interface LanguagesEdge {
	node: PurpleNode
	size: number
}

interface PurpleNode {
	color: string
	id: string
	name: string
}

interface SocialAccounts {
	edges: SocialAccountsEdge[]
}

interface SocialAccountsEdge {
	node: FluffyNode
}

interface FluffyNode {
	displayName: string
	provider: string
	url: string
}
