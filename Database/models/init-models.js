var DataTypes = require("sequelize").DataTypes;
var _class_admins = require("./class_admins");
var _classes = require("./classes");
var _events = require("./events");
var _settings = require("./settings");
var _user_classes = require("./user_classes");
var _user_settings = require("./user_settings");
var _users = require("./users");

function initModels(sequelize) {
  var class_admins = _class_admins(sequelize, DataTypes);
  var classes = _classes(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var user_classes = _user_classes(sequelize, DataTypes);
  var user_settings = _user_settings(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  class_admins.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(class_admins, { as: "class_admins", foreignKey: "class_id"});
  events.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(events, { as: "events", foreignKey: "class_id"});
  user_classes.belongsTo(classes, { as: "class", foreignKey: "class_id"});
  classes.hasMany(user_classes, { as: "user_classes", foreignKey: "class_id"});
  user_settings.belongsTo(settings, { as: "setting", foreignKey: "setting_id"});
  settings.hasMany(user_settings, { as: "user_settings", foreignKey: "setting_id"});
  class_admins.belongsTo(user_classes, { as: "user", foreignKey: "user_id"});
  user_classes.hasMany(class_admins, { as: "class_admins", foreignKey: "user_id"});
  user_classes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_classes, { as: "user_classes", foreignKey: "user_id"});
  user_settings.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_settings, { as: "user_settings", foreignKey: "user_id"});

  return {
    class_admins,
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
