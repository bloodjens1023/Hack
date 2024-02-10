const pool = require('./database');

class Client {
    constructor() {

    }
    async selection_user() {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM user");
            console.log(rows);
            return rows;
        } catch (error) {
            console.error("Erreur lors de l'exécution de la requête :", error);
            return null;
        }
    }
    async selection_unique_user(id) {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM user where id_user =" + id);
            console.log(rows);
            return rows;
        } catch (error) {
            console.error("Erreur lors de l'exécution de la requête :", error);
            return null;
        }
    }

}
module.exports = Client;
