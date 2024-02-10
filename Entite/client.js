const db = require('../database.js')

async function selection_user() {
    try {
        const [rows, fields] = await db.query("SELECT * FROM user")
        return rows
    } catch (error) {
        console.error("Erreur lors de l'exécution de la requête :", error)
        return null
    } finally {
        // Assurez-vous de libérer la piscine après utilisation
        pool.end()
    }
}

async function selection_users() {
    try {
        const [rows, fields] = await db.query("SELECT * FROM user")
        return rows
    } catch (error) {
        console.error("Erreur lors de l'exécution de la requête :", error)
        return null
    } finally {
        // Assurez-vous de libérer la piscine après utilisation
        pool.end()
    }
}