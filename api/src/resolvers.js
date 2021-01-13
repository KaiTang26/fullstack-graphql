/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    me(){
      return {
        email: 'kai@gmai.com',
        avatar: 'www/dfdfsf',
        friends:[]
      }
    }
    
  }
}
