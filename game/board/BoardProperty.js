const {BoardSpace} = require("./BoardSpace");

class BoardProperty extends BoardSpace {

    constructor(name, color, price, rent) {
        super(name, 'PROPERTY');

        this.color = color;
        this.price = price;
        this.rent = rent;

        this.purchased = false;
        this.owner = null;

        this.houses = 0;
    }
}

module.exports = {
    BoardProperty
}