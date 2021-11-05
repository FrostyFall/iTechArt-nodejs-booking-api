const passport = require('passport');
const passportJWT = require('passport-jwt');
const UsersRepo = require('../api/repositories/usersRepository');
const AppError = require('./appError');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JWTStrategy(options, async (payload, done) => {
    try {
      const userID = payload.sub;

      const user = await UsersRepo.findById(userID);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      return done(new AppError('Error occured while fetching the user', 500));
    }
  })
);

module.exports = passport;