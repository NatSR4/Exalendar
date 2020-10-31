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
  create_user(first, last, username, password) {
    // salt rounds for bcrypt
    const rounds = 10
    var hashed_pass;
    bcrypt.hash(password, rounds, (err, hash) => {
      if(err) return console.error(err);
      else hashed_pass = hash;

      let fields = ['first_name', 'last_name', 'username', 'password'];
      let values = [first, last, username, hashed_pass];
      // Inserts user into table, and calls cerate_user_settings if success
      this.query_tool.simple_insert('users', fields, values, (err, result) => {
        if(err) return console.error(err);
        else {
          let id = result.insertId;
          this.create_user_settings(id);
        }
      });
    });
  }

  create_user_settings(id) {
    let fields = ['user_id'];
    let values = [id];

    // Inserts into user_settings table,
    this.query_tool.simple_insert('user_settings', fields, values, (err, result) => {
      if(err) return console.error(err);
    });
  }

  verify_user(username, password_attempt, callback) {
    let columns = ['password'];
    let condition = `username = ?`;
    let values = username;

    // Selects password from database where username = provided username
    this.query_tool.simple_select('users', columns, condition, values, (err, result) => {
      if(err) return console.error(err);
      else {
        if (result.length == 0) return callback(false);
        // compare password and hash, callback result
        bcrypt.compare(password_attempt, result[0].password, (err2, res) => {
          if(err2) return console.error(err2);
          else callback(res)
        });
      }
    });
  }
}

module.exports = Database_Tools;
