const express = require('express');
const router = express.Router();
const {
    createTournament,
    createRoom,
    joinRoom,
    savePlayerScore,
    determineWinner
} = require('./tournament.controller');

router.post('/create-tournament', async (req, res) => {
    const { tournament_name, creator_name } = req.body;
    try {
        const tournament = await createTournament(tournament_name, creator_name);
        res.status(201).json(tournament);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create tournament' });
    }
});

router.post('/create-room', async (req, res) => {
    const { tournament_id, room_id } = req.body;
    try {
        await createRoom(tournament_id, room_id);
        res.status(201).json({ message: 'Room created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create room' });
    }
});

router.post('/join-room', async (req, res) => {
    const { tournament_id, room_id, player_name } = req.body;
    try {
        await joinRoom(tournament_id, room_id, player_name);
        res.status(200).json({ message: `${player_name} joined the room successfully` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to join room' });
    }
});

router.post('/save-score', async (req, res) => {
    const { tournament_id, room_id, player_name, score } = req.body;
    try {
        await savePlayerScore(tournament_id, room_id, player_name, score);
        res.status(200).json({ message: 'Score updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update score' });
    }
});

router.post('/determine-winner', async (req, res) => {
    const { tournament_id, room_id } = req.body;
    try {
        await determineWinner(tournament_id, room_id);
        res.status(200).json({ message: 'Winner determined successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to determine winner' });
    }
});

module.exports = router;
