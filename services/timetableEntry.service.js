const TimeTableEntry = require("../models/timetableEntry.model");

const addEntry = async (userId, data) => {
  // Prevent duplicate entries for same class, weekday, and period
  const existing = await TimeTableEntry.findOne({
    user: userId,
    classId: data.classId,
    weekday: data.weekday,
    periodNumber: data.periodNumber,
  });

  if (existing) {
    const error = new Error("This period already has a subject assigned");
    error.statusCode = 400;
    throw error;
  }

  const entry = new TimeTableEntry({ ...data, user: userId });
  return await entry.save();
};

const getEntries = async (userId, classId) => {
  return await TimeTableEntry.find({ user: userId, classId });
//   return await TimeTableEntry.find({ user: userId, classId }).populate("subject staff");
};

module.exports = { addEntry, getEntries };
