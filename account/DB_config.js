const mysql = require('mysql')
const dbConn=mysql.createConnection({
    //need sql address
})

dbConn.connect()

module.exports = db;