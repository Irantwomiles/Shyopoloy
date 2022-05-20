const { v4 : uuid } = require('uuid');
const {GameState} = require("./GameState.js");
const {logWarning, logMessage} = require("../logger");

class Game {

    constructor(io, player, room, password) {
        this.id = uuid();
        this.gameLeader = player;

        this.room = room;

        this.players = [];
        this.players.push(player);

        this.gameState = new GameState();

        this.gameTimer = 0;

        logMessage(`Game created with id ${this.id}`);
    }

    /**
     * Check if a player is already in this game.
     * @param player
     */
    isPlayerHere(player) {
        for(const p of this.players) {
            if(p.socket.id === player.socket.id) return true;
        }

        return false;
    }

    addPlayer(player) {
        //TODO: Check game state to see if the player can join the game.
        this.players.push(player);
        logMessage(`${player.socket.id} has joined the game ${this.id}.`);
    }

}

module.exports = {
    Game
}