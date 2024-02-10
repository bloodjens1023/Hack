const mysql = require('mysql2')

function db() {
    const pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'back'
    }).promise()
    return pool
}

// Utilisez la fonction asynchrone pour pouvoir utiliser await


module.exports = db
