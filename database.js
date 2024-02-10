const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'notes_app'
}).promise()

// Utilisez la fonction asynchrone pour pouvoir utiliser await
async function donne() {
    try {
        const [rows, fields] = await pool.query("SELECT * FROM notes")
        return rows
    } catch (error) {
        console.error("Erreur lors de l'exécution de la requête :", error)
        return null
    } finally {
        // Assurez-vous de libérer la piscine après utilisation
        pool.end()
    }
}

module.exports = donne


console.log("hello")

