const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User{
        email: String!
        avatar: String!
        friends: [User!]!
    }

    type Query{
        me: User!
    }
  

`;

module.exports = typeDefs
