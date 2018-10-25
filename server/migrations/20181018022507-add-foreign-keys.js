'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Houses",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Addresses",
      "houseId",{
        type:Sequelize.UUID,
        references:{
          model:'Houses',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Facilities",
      "houseId",{
        type:Sequelize.UUID,
        references:{
          model:'Houses',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Comments",
      "bookingId",{
        type:Sequelize.UUID,
        references:{
          model:'Bookings',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Bookings",
      "houseId",{
        type:Sequelize.UUID,
        references:{
          model:'Houses',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Bookings",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
  }
};




