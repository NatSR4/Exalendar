const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_meta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'event_id'
      }
    },
    repeat_start: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_interval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_year: {
      type: "YEAR(4)",
      allowNull: true
    },
    repeat_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_week: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repeat_weekday: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'events_meta',
    timestamps: false,
    indexes: [
      {
        name: "event_id",
        using: "BTREE",
        fields: [
          { name: "event_id" },
        ]
      },
    ]
  });
};
