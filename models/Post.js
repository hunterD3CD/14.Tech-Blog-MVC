// import Model class and DataTypes object from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// so Post class can inherits all functions from Model class
class Post extends Model {}

// create table column & configuration for User Model
Post.init(
  {
    // define the table column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  // define configuration
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
