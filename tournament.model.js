const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true
    },
    creator_name: {
        type: String,
        required: true
    },
    winner_name: {
        type: String,
        default: null
    },
    rooms: [{
        room_id: {
            type: String,
            required: true
        },
        players: [{
            player_name: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        }]
    }]
}, { timestamps: true });

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
