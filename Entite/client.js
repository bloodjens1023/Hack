const pool = require('./database');

class Client {
    constructor() {

    }

    async insert_user(user) {
        try {
            // Utilisez une requête préparée pour insérer l'utilisateur dans la base de données
            const sql = "INSERT INTO user (nom, prenom, localisation, cin, lieu_concerne, surete, mot_de_passe,pseudo) VALUES (?, ?, ?, ?, ?, ?,?,?)";
            const values = [user.nom, user.prenom, user.localisation, user.cin, user.lieu_concerne, user.surete, user.mot_de_passe, user.pseudo];
            const result = await pool.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erreur lors de l'insertion de l'utilisateur :", error);
            return null;
        }
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
    async authentification_user(user) {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM user where pseudo ='" + user.pseudo + "' AND mot_de_passe = '" + user.mot_de_passe + "'");
            console.log(rows.length);
            return rows.length > 0 ? true : false;
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
