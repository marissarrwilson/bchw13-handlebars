const db = require( './connection.js' );

class ORM {

    constructor() {}
  
    selectOne(id) {
      const sql = `SELECT * FROM burgers `+ (id ? `WHERE id = ?` : '')
      return db.query(sql, [id])
    }
  
    selectAll() {
      const sql = `SELECT * FROM burgers`
      return db.query(sql)
    }
  
    insertOne(burger_name) {
      const sql = `INSERT INTO burgers(burger_name, devoured) VALUES (?,?)`
      return db.query(sql, [burger_name, false])
  }
  
    updateOne(id, devoured) {
      const sql = `UPDATE burgers SET devoured = ? WHERE id = ?`;
      return db.query(sql, [devoured ? 1 : 0, id])
  }
  
  }

module.exports = ORM