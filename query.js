let mysql = require("mysql");

class Query {
  constructor(connection) {
    this.connection = connection;
  }

/* Creates an SQL INSERT statement with the specified table_name, fields, and
*  values. Returns sql errors if any occur, else returns insertion results */
simple_insert(table_name, fields, values) {
  return new Promise((resolve, reject) => {
    // create placeholder ? characters for sanitization
    var value_binds = new Array();
    for(var i = 0; i < values.length; i++) value_binds.push('?');
    //crete query with ? values
    let query = `INSERT INTO ${table_name} (${fields}) VALUES (${value_binds})`;
    this.connection.query(query, values, (error, results, fields) => {
      if(error)
        reject(error);
      else
        resolve(results);
    });
  });
}

/* Creates an SQL SELECT statement with the specified table_name, columns, and
*  condition. Returns sql errors if any occur, otherwise returns results */
simple_select(table_name, columns, condition) {
  return new Promise((resolve, reject) => {
    // create query with input values
    let query = `SELECT ${columns} FROM ${table_name} WHERE ${condition}`;
    this.connection.query(query, (error, results, fields) => {
      if(error)
        reject(error);
      else
        resolve(results);
    });
  });
}

/* Creates an SQL SELECT statement with the specified table_name, columns,
*  join condition, and condition. Returns sql errors if any occur, otherwise
*  returns results */
join_select(table_name, join_stmt, columns, condition) {
  return new Promise((resolve, reject) => {
    // create query with input values
    let query = `SELECT ${columns} FROM ${table_name} INNER JOIN ${join_stmt} WHERE ${condition}`;
    this.connection.query(query, (error, results, fields) => {
      if(error)
        reject(error);
      else
        resolve(results);
    });
  });
}

}
module.exports = Query;
