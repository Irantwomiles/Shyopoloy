const {BoardCorner} = require("./BoardCorner");
const {BoardSpecial} = require("./BoardSpecial");
const {BoardProperty} = require("./BoardProperty");
const {BoardTax} = require("./BoardTax");

class GameBoard {
    constructor() {
        this.board = [];

        // Bottom Row
        this.board[0] = new BoardCorner('Go', 'GO', 200);
        this.board[1] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[2] = new BoardSpecial('Community Chest', 'COMMUNITY_CHEST');
        this.board[3] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[4] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[5] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[6] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[7] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[8] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[9] = new BoardTax('Tax Season', 150);
        this.board[10] = new BoardCorner('Visiting', 'VISITING', 0);

        // Left Row
        this.board[11] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[12] = new BoardSpecial('Community Chest', 'COMMUNITY_CHEST');
        this.board[13] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[14] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[15] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[16] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[17] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[18] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[19] = new BoardTax('Tax Season', 150);
        this.board[20] = new BoardCorner('Free Parking', 'FREE_PARKING', 0);

        // Top Row
        this.board[21] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[22] = new BoardSpecial('Community Chest', 'COMMUNITY_CHEST');
        this.board[23] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[24] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[25] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[26] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[27] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[28] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[29] = new BoardTax('Tax Season', 150);
        this.board[30] = new BoardCorner('Jail', 'JAIL', 0);

        // Right Row
        this.board[31] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[32] = new BoardSpecial('Community Chest', 'COMMUNITY_CHEST');
        this.board[33] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[34] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[35] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[36] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[37] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[38] = new BoardProperty('Ghetto 1', 'brown', 150, 20);
        this.board[39] = new BoardTax('Tax Season', 150);
        this.board[40] = new BoardCorner('Jail', 'JAIL', 0);
    }
}

module.exports = {
    GameBoard
}