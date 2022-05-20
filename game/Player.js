const {logMessage, logWarning, logError} = require('../logger.js');

class Player {
    /**
     * A Player object is created as soon as the user enters the website.
     * @param room
     */
    constructor(socket) {
        this.socket = socket;
        this.game = null;
        this.room = null;
    }

    createLobby(io, room) {
        if(!this.socket) {
            logError("Socket is not defined.");
            return false;
        }

        if(io.sockets.adapter.rooms.has(room)) {
            logError("This room already exist.");
            return false;
        }

        if(this.room !== null) {
            logError("You are already in a room, leave this one before creating another one.");
            return false;
        }

        if(this.isInGame()) {
            logError(`You are already in a game with id ${this.game.id}.`);
            return false;
        }

        this.socket.join(room);
        this.room = room;

        logMessage(`${this.socket.id} has created the room ${this.room}`);
        return true;
    }

    joinRoom(io, room) {

        if(!this.socket) {
            logError("Socket is not defined.");
            return false;
        }

        if(!io.sockets.adapter.rooms.has(room)) {
            logError(`Room ${room} does not exist.`);
            return false;
        }

        if(this.room !== null) {
            logError(`You are already in the room ${this.room}, leave this one before joining another one.`);
            return false;
        }

        if(this.isInGame()) {
            logError(`You are already in a game ${this.game.id}, leave this one before joining another one.`);
            return false;
        }

        this.socket.join(room);
        this.room = room;

        logMessage(`${this.socket.id} has joined room ${this.room}`);
        return true;
    }

    isInGame() {
        return this.game !== null;
    }

}

module.exports = {
    Player
}