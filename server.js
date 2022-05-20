const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

const {logError, logMessage} = require("./logger");

const { Player } = require('./game/Player.js');
const { PlayerManager } = require('./game/PlayerManager.js');
const {GameManager} = require("./game/GameManager");

const playerManager = new PlayerManager();
const gameManager = new GameManager();

io.on("connection", (socket) => {
    playerManager.addPlayer(socket);

    socket.on('lobby-info', (data) => {
        console.log("lobby-info:", data);
        io.to(socket.id).emit('lobby-info', gameManager.getGameInfoAll());
    })

    socket.on('create-lobby', (data) => {

        const player = playerManager.getPlayer(socket);

        if(player === null) {
            logError(`${socket.id} returned null when getting player.`)
            return;
        }

        gameManager.createGame(io, player, data);
    })

    socket.on('join-lobby', (data) => {
        const player = playerManager.getPlayer(socket);

        if(player === null) {
            logError(`${socket.id} returned null when getting player.`)
            return;
        }

        gameManager.joinGame(io, player, data);
    })
});

server.listen(3001, () => {
    console.log("server has started");
})

module.exports = {
    io
}