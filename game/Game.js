const { v4 : uuid } = require('uuid');
const {GameState} = require("./GameState.js");
const {logWarning, logMessage} = require("../logger");
const {GameBoard} = require("./board/GameBoard");

class Game {

    constructor(io, player, room, password) {
        this.id = uuid();
        this.gameLeader = player;

        this.room = room;

        this.players = [];
        this.players.push(player);

        this.gameState = new GameState();

        this.gameTimer = 0;

        this.turn = 0;

        this.gameBoard = new GameBoard();

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
        player.game = this;
        logMessage(`${player.socket.id} has joined the game ${this.id}.`);
    }

    updateTurn() {
        if(this.turn === (this.players.length - 1)) {
            this.turn = 0;
        } else {
            this.turn++;
        }
    }

    sendGameBoard(io) {
        io.in(this.room).emit('board-update', this.gameBoard);
        logMessage(`Sending game board date ${this.id}`);
    }
}

module.exports = {
    Game
}