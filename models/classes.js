/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classes', {
    class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    class_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "class_name"
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'classes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "class_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "class_name" },
        ]
      },
      {
        name: "teacher_id",
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
        ]
      },
    ]
  });
};
