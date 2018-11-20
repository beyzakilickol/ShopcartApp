'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'stores',
      'userid',{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    )
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'stores',
      'userid'
    )
  }
};
