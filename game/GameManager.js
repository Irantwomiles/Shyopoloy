const {logError} = require("../logger");
const {Game} = require("./Game");

class GameManager {

    constructor() {
        this.games = [];
    }

    /**
     * Create a game
     * @param io
     * @param player
     * @param room
     */
    createGame(io, player, room) {

        //TODO: Implement password protection for lobbies.

        const _created = player.createLobby(io, room);

        if(!_created) {
            logError(`Was not able to create a new lobby.`);
            return;
        }

        const game = new Game(io, player, room);
        this.games.push(game);
    }

    joinGame(io, player, room) {

        const game = this.getGameByRoom(room);

        if(game === null) {
            logError(`Could not find a game with the room name ${room}`);
            return;
        }

        if(player.isInGame()) {
            logError(`Player ${player.socket.id} is already in a game.`);
            return;
        }

        if(game.isPlayerHere(player)) {
            logError(`Player ${player.socket.id} is already in game ${game.id}.`);
            return;
        }

        const _joined = player.joinRoom(io, room);

        if(!_joined) {
            logError(`Could not join room ${room}.`);
            return;
        }

        game.addPlayer(player);
        this.getGameBoard(io, player, room);
    }

    getGameBoard(io, player, room) {

        const game = this.getGameByRoom(room);

        if(game === null) {
            logError(`Could not find a game with the room name ${room}`);
            return;
        }

        if(!player.isInGame()) {
            logError(`Player ${player.socket.id} is not in a game.`);
            return;
        }

        if(!game.isPlayerHere(player)) {
            logError(`Player ${player.socket.id} is not in game ${game.id}.`);
            return;
        }

        game.sendGameBoard(io);
    }

    getGameInfo(io, room) {
        for(const game of this.games) {
            if(game.room === room) {
                return {
                    players: game.players.length,
                    currentTime: game.gameTimer
                }
            }
        }

        return null;
    }

    /**
     * Get the info for all of the current games returned as an array of objects.
     * @returns {*[]}
     */
    getGameInfoAll() {
        const _arr = [];
        for(const game of this.games) {
            _arr.push({id: game.id, room: game.room, players: game.players.length, gameTimer: game.gameTimer});
        }

        return _arr;
    }

    /**
     * Get a game by the room name.
     * @param room
     * @returns {null|*}
     */
    getGameByRoom(room) {
        for(const game of this.games) {
            if(game.room === room) return game;
        }

        return null;
    }

}

module.exports = {
    GameManager
}