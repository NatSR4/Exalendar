var DataTypes = require("sequelize").DataTypes;
var _classes = require("./classes");
var _events = require("./events");
var _settings = require("./settings");
var _user_classes = require("./user_classes");
var _user_settings = require("./user_settings");
var _users = require("./users");

function initModels(sequelize) {
  var classes = _classes(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var user_classes = _user_classes(sequelize, DataTypes);
  var user_settings = _user_settings(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  classes.belongsTo(users, { foreignKey: "teacher_id"});
  users.hasMany(classes, { foreignKey: "teacher_id"});
  events.belongsTo(classes, { foreignKey: "class_id"});
  classes.hasMany(events, { foreignKey: "class_id"});
  user_classes.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(user_classes, { foreignKey: "user_id"});
  user_classes.belongsTo(classes, { foreignKey: "class_id"});
  classes.hasMany(user_classes, { foreignKey: "class_id"});
  user_settings.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(user_settings, { foreignKey: "user_id"});
  user_settings.belongsTo(settings, { foreignKey: "setting_id"});
  settings.hasMany(user_settings, { foreignKey: "setting_id"});

  return {
    classes,
    events,
    settings,
    user_classes,
    user_settings,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
