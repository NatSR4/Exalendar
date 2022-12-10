const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    setting_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "setting_name"
    },
    setting_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
      {
        name: "setting_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_name" },
        ]
      },
    ]
  });
};
