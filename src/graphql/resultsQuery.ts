import gql from 'graphql-tag'

export const GET_EUROJACKPOT_DRAWS = gql`
  query GetEurojackpotDraws {
    draw(limit: 1, type: "eurojackpot") {
      backendError
      draws {
        date
        numbers
        additionalNumbers
        jackpot
      }
      success
    }
  }
`
