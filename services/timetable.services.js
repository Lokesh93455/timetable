const TimeTable = require("../models/timetable.model");

const createTimeTable = async (userId, data) => {
  const existing = await TimeTable.findOne({ user: userId, classId: data.classId });
  if (existing) {
    const error = new Error("Timetable already exists for this class");
    error.statusCode = 400;
    throw error;
  }

  const timeTable = new TimeTable({
    ...data,
    user: userId,
  });

  return await timeTable.save();
};


const getTimeTables = async (userId, classId = null) => {
  const query = { user: userId };

  if (classId) {
    query.classId = classId; 
  }

  return await TimeTable.find(query)
    .populate("classId") 
    .sort({ createdAt: -1 }); 
};
module.exports = { createTimeTable, getTimeTables };
