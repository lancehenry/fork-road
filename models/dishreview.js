module.exports = function (sequelize, DataTypes) {
  var DishReview = sequelize.define("DishReview", {
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200]
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
    // We're saying that a Dish Review should belong to a User
    // A Dish Review can't be created without a User due to the foreign key constraint
    DishReview.belongsTo(models.user, {
      onDelete: 'CASCADE'
    });
  };

  return DishReview;
};
