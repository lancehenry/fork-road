module.exports = function (sequelize, DataTypes) {
  var Dish = sequelize.define("Dish", {
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    dishRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 150]
    }
  });

  Dish.associate = function (models) {
    // We're saying that a Dish should belong to a Restaurant
    // A Dish can't be created without a Restaurant due to the foreign key constraint
    Dish.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dish;
};
