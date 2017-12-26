'use strict';
var express = require('express');
var userController = require('./userController');

var router = express.Router();

router.post("/users", userController.create);
router.get("/users/:id", userController.findUser);
router.get("/users", userController.showAllUsers);
router.delete("/users/:id/", userController.removeUser);

module.exports = router;