const ORM = require("../config/orm.js");
const orm = new ORM();

class burger {

    constructor() {}

    listBurgers() {
        return orm.selectAll()
    }

    submitBurger(burger_name) {
        return orm.insertOne(burger_name)
    }
    
    devourBurger(id, devoured) {
        return orm.updateOne(id, devoured)
    }
};

module.exports = burger;
