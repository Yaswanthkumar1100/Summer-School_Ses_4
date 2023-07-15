const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "<Your Username>",
    port: 5432,
    password: "<your_password>",
    database: "<Name of database you created>"
})

module.exports = client
