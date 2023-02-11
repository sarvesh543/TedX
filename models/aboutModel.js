const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({});

const About = await mongoose.model("about", speakerSchema);
