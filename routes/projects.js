const express = require('express');
const router = require('express-promise-router')();
// const passport = require('passport');
// const passportConf = require('../passport');

const RUCoreController = require('../controllers/rucore');
// const passportSignIn = passport.authenticate('local', { session: false });
// const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
      .get(RUCoreController.load)
      .post(RUCoreController.formSubmit);

module.exports = router;
