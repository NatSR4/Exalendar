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
    await this.query_tool.simple_insert('users', fields, values);
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

/* Verifies a username and password combo, returns true if match, false if not*/
async verify_user(username, password_attempt) {
  try {
    let columns = ['password'];
    let condition = `username = ?`;
    let values = username;

    // Selects password from database where username = provided username
    let select = await this.query_tool.simple_select('users', columns, condition, values);
    if (select.length == 0) throw new Error('SQL EMPTY SET: No matching users');
    // compare password and hash, return result
    return await bcrypt.compare(password_attempt, select[0].password);
  }
  catch (err) {
    throw new Error(err);
  }
}

/* creates an entry in the classes table with the specified name and teacher */
async create_class(class_name, teacher_usrname) {
  try {
    let select = await this.query_tool.simple_select('users', ['id'], `username = "${teacher_usrname}"`);
    if (select.length == 0) throw new Error('SQL EMPTY SET: No matching users');
    let teacher_id = select[0].id;
    let fields = ['name', 'teacher_id'];
    let values = [class_name, teacher_id];
    await this.query_tool.simple_insert('classes', fields, values);
    return 'Class Created';
  }
  catch (err) {
    throw new Error(err);
  }
}

/* creates an entry in the user_classes table with the users id and classes id */
async enroll_user(class_name, username) {
  try {
    let user_select = await this.query_tool.simple_select('users', ['id'], `username = "${username}"`);
    let class_select = await this.query_tool.simple_select('classes', ['id'], `name = "${class_name}"`);
    if (user_select.length == 0)
      throw new Error('SQL EMPTY SET: No matching users');
    if (class_select.length == 0)
      throw new Error('SQL EMPTY SET: No matching classes');
    let user_id = user_select[0].id;
    let class_id = class_select[0].id;
    let fields = ['user_id', 'class_id'];
    let values = [user_id, class_id];
    await this.query_tool.simple_insert('user_classes', fields, values);
    return `${username} added to class: ${class_name}`;
  }
  catch (err) {
    throw new Error(err);
  }
}

/* gets a list of all the students enrolled in the specified class */
async get_students(class_name) {
  try {
    let join_stmt = 'users ON users.id = user_classes.user_id '
                   +'INNER JOIN classes ON classes.id = user_classes.class_id ';
    let select =  await this.query_tool.join_select('user_classes', join_stmt, ['username'], `name = "${class_name}"`);
    return select;
  }
  catch (err) {
    throw new Error(err);
  }
}

/* gets a list of all classes the specified student is entrolled in */
async get_classes(username) {
  try {
    let join_stmt = 'users ON users.id = user_classes.user_id '
                   +'INNER JOIN classes ON classes.id = user_classes.class_id ';
    let select =  await this.query_tool.join_select('user_classes', join_stmt, ['name'], `username = "${username}"`);
    return select;
  }
  catch (err) {
    throw new Error(err);
  }
}
}

module.exports = Database_Tools;
