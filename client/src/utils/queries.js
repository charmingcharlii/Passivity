import { gql } from '@apollo/client'
// GET CURRENT USER INFO
// SHOULD INCLUDE HELD STOCKS(POPULATED), NAME, EMAIL

export const GET_USER = gql`
query Query {
  me {
    userPortfolio {
      ticker
      holding
      value
    }
    _id
    username
    email
  }
}
`
