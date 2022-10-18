var DataTypes = require("sequelize").DataTypes;
var _classes = require("./classes");
var _events = require("./events");
var _events_meta = require("./events_meta");
var _settings = require("./settings");
var _teachers = require("./teachers");
var _user_classes = require("./user_classes");
var _user_settings = require("./user_settings");
var _users = require("./users");

function initModels(sequelize) {
  var classes = _classes(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var events_meta = _events_meta(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var teachers = _teachers(sequelize, DataTypes);
  var user_classes = _user_classes(sequelize, DataTypes);
  var user_settings = _user_settings(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  events.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(events, { as: "events", foreignKey: "class_id"});
  teachers.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(teachers, { as: "teachers", foreignKey: "class_id"});
  user_classes.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(user_classes, { as: "user_classes", foreignKey: "class_id"});
  events_meta.belongsTo(events, { as: "event", foreignKey: "event_id"});
  events.hasMany(events_meta, { as: "events_meta", foreignKey: "event_id"});
  user_settings.belongsTo(settings, { as: "setting", foreignKey: "setting_id"});
  settings.hasMany(user_settings, { as: "user_settings", foreignKey: "setting_id"});
  teachers.belongsTo(user_classes, { as: "user", foreignKey: "user_id"});
  user_classes.hasMany(teachers, { as: "teachers", foreignKey: "user_id"});
  user_classes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_classes, { as: "user_classes", foreignKey: "user_id"});
  user_settings.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_settings, { as: "user_settings", foreignKey: "user_id"});

  return {
    classes,
    events,
    events_meta,
    settings,
    teachers,
    user_classes,
    user_settings,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
