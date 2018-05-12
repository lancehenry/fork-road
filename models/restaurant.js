module.exports = function (sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    // Giving the Author model a name of type STRING
    restaurantName: DataTypes.STRING
  });

  Restaurant.associate = function (models) {
    // Associating Restaurant with Dishes
    // When a Restaurant is deleted, also delete any associated Dishes
    Restaurant.hasMany(models.Dish, {
      onDelete: "cascade"
    });
  };

  return Restaurant;
};
