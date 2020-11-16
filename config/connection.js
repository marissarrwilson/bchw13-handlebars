const mysql = require("mysql");


const defaultConnecton = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'allblack',
    database: 'burgers_db'
};

const connectionString = process.env.JAWSDB_URL || defaultConnecton;

const db = new Database(connectionString);
module.exports = db;