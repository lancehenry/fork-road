module.exports = function (sequelize, DataTypes) {
  var DishReview = sequelize.define("DishReview", {
    // Giving the Author model a name of type STRING
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
      allowNull: true,
      len: [1, 200]
    }
  });

  DishReview.associate = function (models) {
    // We're saying that a Dish should belong to a Restaurant
    // A Dish can't be created without a Restaurant due to the foreign key constraint
    DishReview.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return DishReview;
};
