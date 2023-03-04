function errorHandler(error, req, res, next) {
  if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({
      error: error.errors[0].message,
    });
  } else if (error.name === 'emailRequired') {
    res.status(400).json({
      message: 'Email is Required',
    });
  } else if (error.name === 'passwordRequired') {
    res.status(400).json({
      message: 'Password is Required',
    });
  } else if (error.name === 'InvalidEmailOrPassword') {
    res.status(400).json({
      message: 'Invalid Email Or Password',
    });
  } else if (error.name === 'NoToken') {
    res.status(400).json({
      message: 'No Token',
    });
  } else if (error.name === 'UnAuthorized') {
    res.status(400).json({
      message: 'Un Authorized',
    });
  } else {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}

module.exports = errorHandler;
