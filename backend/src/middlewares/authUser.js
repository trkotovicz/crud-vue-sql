const { validateToken } = require('../utils/jwtService');

const authUser = (req, _res, next) => {
  const { authorization: token } = req.headers;
  const { data } = validateToken(token);
  req.tokenPayload = data;
  next();
};

module.exports = authUser;
