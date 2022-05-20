const {logMessage, logWarning, logError} = require('../logger.js');
const { Player } = require('./Player.js');

class PlayerManager {

    constructor() {
        this.players = new Map();
    }

    /**
     * Add player to the players Map.
     * @param socket
     */
    addPlayer(socket) {
        if(this.players.has(socket.id)) {
            logError(`There is already a player with id ${socket.id}.`);
            return;
        }

        this.players.set(socket.id, new Player(socket));
        logMessage(`Added player ${socket.id}`);
    }

    /**
     * Remove player from the players Map.
     * @param socket
     */
    removePlayer(socket) {
        if(!this.players.has(socket.id)) {
            logError(`There is no player with id ${socket.id}.`);
            return;
        }

        this.players.remove(socket.id, new Player(socket));
        logMessage(`Removed player ${socket.id}`);
    }

    /**
     * Get a player from the players Map.
     * @param socket
     * @returns {null | Player}
     */
    getPlayer(socket) {
        if(this.players.has(socket.id)) return this.players.get(socket.id);

        return null;
    }
}

module.exports = {
    PlayerManager
}