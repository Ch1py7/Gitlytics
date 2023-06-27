import { ApolloClient, ApolloQueryResult, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { Data } from 'types'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
})

export const getApiData = async (username: string) => {
  const { data, loading }: ApolloQueryResult<Data> = await client.query({
    query: gql`
      {
        user(login: "${username}") {
          id
          avatarUrl(size: 10)
          name
          url
          websiteUrl
          twitterUsername
          location
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
          repositories(isFork: false, isLocked: false, first: 100) {
            nodes {
              name
              url
              languages(first: 10) {
                edges {
                  node {
                    color
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return { client, data, loading }
}
