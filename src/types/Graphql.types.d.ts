export interface RootObject {
  data: Data
}

export interface Data {
  user: User
}

export interface User {
  avatarUrl: string
  bio: string
  contributionsCollection: ContributionsCollection
  email: string
  id: string
  isBountyHunter: boolean
  location: string
  name: string
  repositories: Repositories
  socialAccounts: SocialAccounts
  twitterUsername: string
  url: string
  websiteUrl: string
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar
  contributionYears: number[]
  firstIssueContribution: firstIssueContribution
  firstPullRequestContribution: firstPullRequestContribution
  firstRepositoryContribution: firstRepositoryContribution
  totalCommitContributions: number
}

export interface ContributionCalendar {
  colors: Color[]
  isHalloween: boolean
  months: Month[]
  totalContributions: number
  weeks: Week[]
}

export enum Color {
  Ebedf0 = '#ebedf0',
  The216E39 = '#216e39',
  The30A14E = '#30a14e',
  The40C463 = '#40c463',
  The9Be9A8 = '#9be9a8',
}

export interface Month {
  firstDay: Date
  name: string
  totalWeeks: number
  year: number
}

export interface Week {
  contributionDays: ContributionDay[]
  firstDay: Date
}

export interface ContributionDay {
  color: Color
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

export interface firstRepositoryContribution {
  __typename: string
  url: string
  occurredAt: Date
  repository: Repository
}

export interface firstPullRequestContribution {
  __typename: string
  url: string
  occurredAt: Date
  pullRequest: PullRequest
}

export interface firstIssueContribution {
  __typename: string
  url: string
  occurredAt: Date
  issue: Issue
}

export interface Repository {
  url: string
}

export interface PullRequest {
  url: string
}

export interface Issue {
  url: string
}

export interface Repositories {
  nodes: NodeElement[]
}

export interface NodeElement {
  languages: Languages
  name: string
  url: string
}

export interface Languages {
  edges: LanguagesEdge[]
}

export interface LanguagesEdge {
  node: PurpleNode
}

export interface PurpleNode {
  color: string
  id: string
  name: string
}

export interface SocialAccounts {
  edges: SocialAccountsEdge[]
}

export interface SocialAccountsEdge {
  node: FluffyNode
}

export interface FluffyNode {
  displayName: string
  provider: string
  url: string
}
