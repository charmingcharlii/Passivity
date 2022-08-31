import { gql } from '@apollo/client'
// GET CURRENT USER INFO
// SHOULD INCLUDE HELD STOCKS(POPULATED), NAME, EMAIL

export const GET_USER = gql`
query Query {
    me {
      username
      email
      userPortfolio {
        stocks {
          ticker
          holding
          value
        }
        totalInvestment
      }
    }
  }
`
