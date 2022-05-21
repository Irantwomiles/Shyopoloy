const {BoardSpace} = require("./BoardSpace");

class BoardSpecial extends BoardSpace {

    /**
     * Type can be CHANCE, COMMUNITY_CHEST
     * @param name
     * @param type
     * @param price
     * @param tax
     */
    constructor(name, type) {
        super(name, type);
    }
}

module.exports = {
    BoardSpecial
}