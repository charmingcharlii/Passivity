import { gql } from '@apollo/client'
// ADD PROFILE
export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`

// LOGIN
export const LOGIN = gql`
mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`
// UPDATE USER INFO

// DELETE USER

// ADD STOCK
export const ADD_STOCK = gql`
mutation Mutation($holdingData: StockInput!) {
  saveHolding(holdingData: $holdingData) {
    userPortfolio {
      ticker
      holding
      value
    }
    username
    email
  }
}
`

// UPDATE STOCK
//PLACEHOLDER

// DELETE STOCK
/*
 * Takes in a ticker string.
 * Deletes the corresponding stock element from the userPortfolio.
 */
export const DELETE_STOCK = gql`
mutation Mutation($ticker: ticker) {
  removeHolding(ticker: $ticker) {
    userPortfolio {
      ticker
      holding
      value
    }
    username
    email
  }
}
`