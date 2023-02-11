const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({});

const Speaker = await mongoose.model("speaker", speakerSchema);
