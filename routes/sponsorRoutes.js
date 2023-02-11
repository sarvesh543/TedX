const sponsorController = require("../controllers/sponsorController");

const router = require("express").Router();

router
    .route("/")
    .get(sponsorController.getAllSponsors)
    .post(sponsorController.createSponsor);

router
    .route("/:id")
    .get(sponsorController.getOneSponsor)
    .patch(sponsorController.updateSponsor)
    .delete(sponsorController.deleteSponsor);

module.exports = router;
