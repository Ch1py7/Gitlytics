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
  twitterUsername: null
  url: string
  websiteUrl: null
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar
  contributionYears: number[]
  firstIssueContribution: FirstContribution
  firstPullRequestContribution: FirstContribution
  firstRepositoryContribution: null
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

export interface FirstContribution {
  __typename: string
  issue?: Issue
  occurredAt: Date
  pullRequest?: Issue
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
  edges: Edge[]
}

export interface Edge {
  node: EdgeNode
}

export interface EdgeNode {
  color: string
  id: string
  name: string
}
