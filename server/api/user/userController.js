'use strict';
var User = require('./userModel').User;
var mongoose = require('mongoose');

exports.create = function (req, res) {
    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        addres: req.body.addres
    });
     user.save().then(function (user) {

        return res.send(user);
    }).catch(function (err) {

        return handleError(err)
    });
};

exports.findUser = function (req, res) {
    var id = req.params.id;
    User.findById(id).then(function (user) {
        return res.send(user);
    }).catch(function (err) {
        return handleError(err)
    });
};

exports.removeUser = function (req, res) {
    var id = req.params.id;
   findById(id).then(function (user) {
        return user.remove()
    }).then(function (removeUser) {
        return console.log('user was remove' + removeUser);
    }).catch(function (eror) {
        console.log(eror);
    });
};

exports.showAllUsers = function (req, res) {
    User.find().then(function (users) {
        return res.send(users);
    }).catch(function (error) {
        console.log(eror);
    })
}
