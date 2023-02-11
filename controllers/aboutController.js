const factory = require("./controllerFactory");
const About = require("../models/aboutModel");

exports.getAllAbouts = factory.getAll(About);
exports.getOneAbout = factory.getOne(About);
exports.updateAbout = factory.updateOne(About);
exports.createAbout = factory.createOne(About);
exports.deleteAbout = factory.deleteOne(About);


exports