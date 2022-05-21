const {BoardSpace} = require("./BoardSpace");

class BoardCorner extends BoardSpace {

    /**
     * Type can be GO, VISITING, FREE_PARKING, JAIL
     * @param name
     * @param type
     * @param price
     * @param tax
     */
    constructor(name, type, goPay) {
        super(name, type);

        // How much to pay once passing go.
        this.goPay = goPay;
    }
}

module.exports = {
    BoardCorner
}