'use strict';
var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    addres: String
});

exports.User = mongoose.model('User',userSchema);