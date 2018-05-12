module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    username: { type: Sequelize.TEXT },
    password: { type: Sequelize.STRING, allowNull: false },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  User.associate = function (models) {
    // Associating User with Restaurants
    // When a User is deleted, also delete any associated Restaurants
    User.hasMany(models.Restaurant, {
      onDelete: "cascade"
    });
  };

  return User;
};
