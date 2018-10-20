'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Facilities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4 
      },
      size: {
        type: Sequelize.ENUM,
        values:["S","M","L","XL"]
      },
      num_rooms: {
        type: Sequelize.INTEGER
      },
      num_bathrooms: {
        type: Sequelize.INTEGER
      },
      pet_friendly: {
        type: Sequelize.BOOLEAN
      },
      smoke_friendly: {
        type: Sequelize.BOOLEAN
      },
      tv: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      num_beds: {
        type: Sequelize.INTEGER
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      garage: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Facilities');
  }
};