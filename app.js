const express = require('express'); // Importation d'Express
const app = express(); // Création de l'application Express
const port = 3000; // Port d'écoute

// Route principale
app.get('/api', (req, res) => {
    res.send('Hello, World!'); // Réponse avec un message
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré : http://localhost:${port}`);
});
