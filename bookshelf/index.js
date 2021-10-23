// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
      user: 'junior',
      password:'password',
      database:'newworlddata'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf;