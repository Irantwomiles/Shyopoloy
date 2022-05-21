const {BoardSpace} = require("./BoardSpace");

class BoardTax extends BoardSpace {

    constructor(name, tax) {
        super(name, 'TAX');
        this.tax = tax;
    }
}

module.exports = {
    BoardTax
}