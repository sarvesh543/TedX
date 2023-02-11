const factory = require("./controllerFactory");
const Speaker = require("../models/speakerModel");

exports.getAllSpeakers = factory.getAll(Speaker);
exports.getOneSpeaker = factory.getOne(Speaker);
exports.updateSpeaker = factory.updateOne(Speaker);
exports.createSpeaker = factory.createOne(Speaker);
exports.deleteSpeaker = factory.deleteOne(Speaker);
