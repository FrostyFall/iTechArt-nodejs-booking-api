const express = require('express');
const controller = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { signupSchema, loginSchema } = require('../validation').authSchemas;

const router = express.Router();

router.route('/signup').post(validate(signupSchema), controller.signup);

router.route('/login').post(validate(loginSchema), controller.login);

module.exports = router;
