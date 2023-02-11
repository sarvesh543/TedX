const aboutController = require("../controllers/aboutController");

const router = require("express").Router();

router
    .route("/")
    .get(aboutController.getAllAbouts)
    .post(aboutController.createAbout);

router
    .route("/:id")
    .get(aboutController.getOneAbout)
    .patch(aboutController.updateAbout)
    .delete(aboutController.deleteAbout);

module.exports = router;
