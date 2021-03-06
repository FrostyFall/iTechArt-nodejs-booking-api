const passport = require('../../config/passport');
const AppError = require('../../utils/appError');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next(new AppError(info.message, 400));
    }

    req.user = user;

    next();
  })(req, res, next);
};
