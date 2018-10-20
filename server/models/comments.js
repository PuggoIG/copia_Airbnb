'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    comment_guest: DataTypes.TEXT,
    comment_host: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Bookings,{foreignKey:"bookingId"})
  };
  return Comments;
};