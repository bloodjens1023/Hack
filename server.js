const express = require('express');

const Client = require('./Entite/client');

// Importer la fonction donne depuis database.js
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

let cl = new Client()



app.get('/api/bonjour', async (req, res) => {
    try {
        const data = await cl.selection_user(); // Appeler la fonction donne dans votre route
        res.json(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
});

app.get('/api/auth', async (req, res) => {
    try {
        const data = await cl.selection_unique_user(2); // Appeler la fonction donne dans votre route
        res.json(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
});


app.post('/api/inscription', async (req, res) => {
    try {
        const us = req.body;
        const data = await cl.insert_user(us); // Appeler la fonction donne dans votre route
        res.json(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
});

app.post('/api/connection', async (req, res) => {
    try {
        const us = req.body;
        const data = await cl.authentification_user(us);
        if (data) {
            res.status(200).json({ success: "Utilisateur connecté avec succès !" });
        } else {
            res.status(401).json({ error: "Identifiant ou mot de passe incorrect." });
        }


    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
});

app.listen(PORT, () => {
    console.log(`Le serveur est sur le port ${PORT}`);
});
