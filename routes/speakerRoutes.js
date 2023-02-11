const speakerController = require("../controllers/speakerController");

const router = require("express").Router();

router
    .route("/")
    .get(speakerController.getAllSpeakers)
    .post(speakerController.createSpeaker);

router
    .route("/:id")
    .get(speakerController.getOneSpeaker)
    .patch(speakerController.updateSpeaker)
    .delete(speakerController.deleteSpeaker);
module.exports = router;
