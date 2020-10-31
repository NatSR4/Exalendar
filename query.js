let mysql = require("mysql");

class Query {
  constructor(connection) {
    this.connection = connection;
  }

/* Creates an SQL INSERT statement with the specified table_name, fields, and
*  values. Returns sql errors if any occur, else returns insertion results */
  simple_insert(table_name, fields, values, callback) {
    let query = `INSERT INTO ${table_name} (${fields}) VALUES (${values})`;

    this.connection.query(query, (error, results, fields) => {
      if(error) {
        callback(error)
      }
      callback(null ,results);
    });
  }

/* Creates an SQL SELECT statement with the specified table_name, columns, and
*  condition. Returns sql errors if any occur, otherwise returns results */
  simple_select(table_name, columns, condition) {
    let query = `SELECT ${columns} FROM ${table_name} WHERE ${condition}`;

    this.connection.query(query, (error, results, fields) => {
      if(error) {
          callback(error)
      }
      callback(null ,results);
    });
  }
}

module.exports = Query;
