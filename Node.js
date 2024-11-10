const express = require('express');
const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

client.connect()
    .then(() => console.log("Connecté à la base de données"))
    .catch(err => console.error("Erreur de connexion", err));

// Route pour l'inscription
app.post('/signup', (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    // Insertion dans la base de données
    const query = 'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)';
    const values = [firstname, lastname, email, password];

    client.query(query, values)
        .then(result => {
            res.status(201).json({ message: 'Utilisateur créé avec succès' });
        })
        .catch(err => {
            console.error("Erreur d'insertion", err);
            res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur' });
        });
});

// Route pour récupérer les utilisateurs
app.get('/users', (req, res) => {
    client.query('SELECT * FROM users')
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(err => {
            console.error("Erreur de requête", err);
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
        });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en marche sur le port ${PORT}`);
});
