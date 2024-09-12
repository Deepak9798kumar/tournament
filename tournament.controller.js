const Tournament = require('./tournament.model');

const createTournament = async (tournament_name, creator_name) => {
    try {
        const tournament = new Tournament({ tournament_name, creator_name });
        await tournament.save();
        console.log('Tournament Created:', tournament);
        return tournament;
    } catch (error) {
        console.error('Error creating tournament:', error);
    }
};

const createRoom = async (tournament_id, room_id) => {
    try {
        const tournament = await Tournament.findById(tournament_id);
        if (!tournament) throw new Error('Tournament not found');
        tournament.rooms.push({ room_id, players: [] });
        console.log("tournament", tournament)
        await tournament.save();
        console.log('Room Created:', room_id);
    } catch (error) {
        console.error('Error creating room:', error);
    }
};

const joinRoom = async (tournament_id, room_id, player_name) => {
    try {
        const tournament = await Tournament.findById(tournament_id);
        if (!tournament) throw new Error('Tournament not found');

        const room = tournament.rooms.find(room => room.room_id === room_id);
        if (!room) throw new Error('Room not found');

        room.players.push({ player_name, score: 0 });
        await tournament.save();
        console.log(`${player_name} joined room ${room_id}`);
    } catch (error) {
        console.error('Error joining room:', error);
    }
};

const savePlayerScore = async (tournament_id, room_id, player_name, score) => {
    try {
        const tournament = await Tournament.findById(tournament_id);
        if (!tournament) throw new Error('Tournament not found');

        const room = tournament.rooms.find(room => room.room_id === room_id);
        if (!room) throw new Error('Room not found');

        const player = room.players.find(player => player.player_name === player_name);
        if (!player) throw new Error('Player not found');

        player.score = score;
        await tournament.save();
        console.log(`Score updated for ${player_name}: ${score}`);
    } catch (error) {
        console.error('Error updating player score:', error);
    }
};

const determineWinner = async (tournament_id, room_id) => {
    try {
        const tournament = await Tournament.findById(tournament_id);
        if (!tournament) throw new Error('Tournament not found');

        const room = tournament.rooms.find(room => room.room_id === room_id);
        if (!room) throw new Error('Room not found');

        const winner = room.players.reduce((prev, curr) => (curr.score > prev.score ? curr : prev));

        tournament.winner_name = winner.player_name;
        await tournament.save();
        console.log(`Winner determined: ${winner.player_name}`);
    } catch (error) {
        console.error('Error determining winner:', error);
    }
};

module.exports = {
    createTournament,
    createRoom,
    joinRoom,
    savePlayerScore,
    determineWinner
};
