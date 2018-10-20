'use strict';
module.exports = (sequelize, DataTypes) => {
  var Facilities = sequelize.define('Facilities', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    size: {type:DataTypes.ENUM,values:["S","M","L","XL"]},
    num_rooms: DataTypes.INTEGER,
    num_bathrooms: DataTypes.INTEGER,
    pet_friendly: {type:DataTypes.BOOLEAN,defaultValue:false},
    smoke_friendly:{type:DataTypes.BOOLEAN,defaultValue:false},
    tv: {type:DataTypes.BOOLEAN,defaultValue:false},
    wifi: {type:DataTypes.BOOLEAN,defaultValue:false},
    num_beds: DataTypes.INTEGER,
    kitchen: {type:DataTypes.BOOLEAN,defaultValue:false},
    garage: DataTypes.INTEGER
  }, {});
  Facilities.associate = function(models) {
    Facilities.belongsTo(models.Houses,{foreignKey:"houseId"})
  };
  return Facilities;
};