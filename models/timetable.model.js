const mongoose = require("mongoose");

const breakSchema = new mongoose.Schema({
  afterPeriod: { type: Number, required: true },
  duration: { type: Number, required: true },
});

const timeTableSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  weekdays: {
    type: [String],
    required: true,
  },
  noOfPeriods: {
    type: Number,
    required: true,
  },
  classStartTime: {
    type: String,
    required: true,
  },
  eachPeriodDuration: {
    type: Number,
    required: true,
  },
  breaks: [breakSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("TimeTable", timeTableSchema);
