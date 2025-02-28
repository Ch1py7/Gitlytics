import { gql } from '@apollo/client'

export namespace Queries {
	export const getApiData = (username: string) => gql`
    query GetApiData {
      user(login: "${username}") {
        id
        login
        avatarUrl(size: 500)
        createdAt
        name
        url
        pronouns
        websiteUrl
        twitterUsername
        location
        followers {
          totalCount
        }
        contributionsCollection {
          contributionYears
          firstIssueContribution {
            ... on CreatedIssueContribution {
              __typename
              occurredAt
              url
              issue {
                url
              }
            }
          }
          firstPullRequestContribution {
            ... on CreatedPullRequestContribution {
              __typename
              occurredAt
              url
              pullRequest {
                url
              }
            }
          }
          firstRepositoryContribution {
            ... on CreatedRepositoryContribution {
              __typename
              url
              occurredAt
              repository {
                url
              }
            }
          }
          totalCommitContributions
          contributionCalendar {
            isHalloween
            colors
            months {
              firstDay
              name
              totalWeeks
              year
            }
            weeks {
              firstDay
              contributionDays {
                color
                contributionCount
                contributionLevel
                date
                weekday
              }
            }
            totalContributions
          }
        }
        bio
        email
        isBountyHunter
        repositories(isFork: false, isLocked: false, first: 100, ownerAffiliations: OWNER) {
          nodes {
            name
            url
            stargazerCount
            forkCount
            description
            languages(first: 10) {
              edges {
              size
                node {
                  color
                  id
                  name
                }
              }
            }
          }
        }
        socialAccounts(first: 10) {
          edges {
            node {
              displayName
              provider
              url
            }
          }
        }
      }
    }
  `
}
