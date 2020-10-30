let mysql = require("mysql")

class Query {
  constructor(connection) {
    this.connection = connection;
  }

  simple_insert(table_name, fields, values) {
    let query = `INSERT INTO ${table_name} (${fields}) VALUES (${values})`;
    console.log(query);

    this.connection.query(query, (error, results, fields) => {
      if(error) {
        return console.error(error.message);
      }
      console.log('INSERT Success');
    });
  }

  simple_select(table_name, columns, condition) {
    let query = `SELECT ${columns} FROM ${table_name} WHERE ${condition}`;

    this.connection.query(query, (error, results, fields) => {
      if(error) {
        return console.error(error.message);
      }
      console.log('SELECT Success');
      return results
    });
  }
}

module.exports = {
  Query: Query
}
