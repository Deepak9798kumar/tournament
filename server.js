const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tournamentRoutes = require('./tournament.routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/tournament', tournamentRoutes);

mongoose.connect('mongodb://localhost:27017/tournamentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });
