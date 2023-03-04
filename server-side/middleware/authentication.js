const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: 'NoToken' };
    }

    const payload = verifyToken(access_token);

    const findUser = await User.findByPk(+payload.id);

    if (!findUser) {
      throw { name: 'UnAuthorized' };
    }

    req.user = {
      id: findUser.id,
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
