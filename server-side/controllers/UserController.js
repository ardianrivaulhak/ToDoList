const { comparePassword } = require('../helpers/bycrypt');
const { createToken } = require('../helpers/jwt');
const { User } = require('../models/index');

class UserController {
  static async readAllUser(req, res, next) {
    try {
      const users = await User.findAll();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const createUser = await User.create({ username, email, password, phoneNumber, address });

      res.status(201).json({
        message: `Success create users ${createUser.username}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: 'emailRequired' };
      }

      if (!password) {
        throw { name: 'passwordRequired' };
      }

      const findUser = await User.findOne({ where: { email } });

      if (!findUser) {
        throw { name: 'InvalidEmailOrPassword' };
      }

      const comparePass = comparePassword(password, findUser.password);

      if (!comparePass) {
        throw { name: 'InvalidEmailOrPassword' };
      }

      const payload = {
        id: findUser.id,
      };

      const access_token = createToken(payload);

      res.status(200).json({
        message: 'Success Login',
        access_token,
        username: findUser.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
