const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Class", classSchema);
