'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: 'authorId' });
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'name is required' },
          notEmpty: { msg: 'name is required' },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'slug is required' },
          notEmpty: { msg: 'slug is required' },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'description is required' },
          notEmpty: { msg: 'description is required' },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'price is required' },
          notEmpty: { msg: 'price is required' },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'image is required' },
          notEmpty: { msg: 'image is required' },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'categoryId is required',
          },
          notEmpty: {
            msg: 'categoryId is required',
          },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'authorId is required',
          },
          notEmpty: {
            msg: 'authorId is required',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          const slug = instance.slug.toLowerCase().split(' ').join('-');
          instance.slug = slug;
        },
        beforeUpdate(instance, options) {
          const slug = instance.slug.toLowerCase().split(' ').join('-');
          instance.slug = slug;
        },
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
