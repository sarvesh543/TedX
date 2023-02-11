const factory = require("./controllerFactory");
const Sponsor = require("../models/sponsorModel");

exports.getAllSponsors = factory.getAll(Sponsor);
exports.getOneSponsor = factory.getOne(Sponsor);
exports.updateSponsor = factory.updateOne(Sponsor);
exports.createSponsor = factory.createOne(Sponsor);
exports.deleteSponsor = factory.deleteOne(Sponsor);
