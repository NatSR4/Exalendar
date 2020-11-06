let mysql = require("mysql");
let bcrypt = require("bcrypt");
let query = require('./query');

class Database_Tools {
  constructor(connection) {
    this.connection = connection;
    this.query_tool = new query(connection);
  }

/* creates an entry in the user table with provided parameters, then creates a
*  corresponding entry in the user settings table */
async create_user(first, last, username, password) {
  try {
    let hashed_pass = await bcrypt.hash(password, 10);
    let fields = ['first_name', 'last_name', 'username', 'password'];
    let values = [first, last, username, hashed_pass];
    // Inserts user into table, and calls cerate_user_settings if success
    let results = await this.query_tool.simple_insert('users', fields, values);
    await this.create_user_settings(results.insertId);
    return 'User Created';
  }
  catch (err) {
    throw new Error(err);
  }
}

/* creates an entry in the user_settings table with the provided id */
async create_user_settings(id) {
  try{
    let fields = ['user_id'];
    let values = [id];
    // Inserts into user_settings table,
    await this.query_tool.simple_insert('user_settings', fields, values);
  }
  catch (err) {
    throw new Error(err);
  }
}

/* Verifies a username and password combo, returns true if match, false if not */
async verify_user(username, password_attempt) {
  try {
    let columns = ['password'];
    let condition = `username = ?`;
    let values = username;

    // Selects password from database where username = provided username
    let select = await this.query_tool.simple_select('users', columns, condition, values);
    if (select.length == 0) throw new Error('No mathing users');
    // compare password and hash, callback result
    return await bcrypt.compare(password_attempt, select[0].password);
  }
  catch (err) {
    throw new Error(err);
  }
}

}

module.exports = Database_Tools;
