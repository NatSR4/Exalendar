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
    ]
  });
};
