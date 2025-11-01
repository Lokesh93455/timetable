const timeTableService = require("../services/timetable.services");

const createTimeTable = async (req, res) => {
  try {
    const newTable = await timeTableService.createTimeTable(req.user._id, req.body);
    res.status(201).json(newTable);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getTimeTables = async (req, res) => {
  try {
    const userId = req.user._id;
    const { classId } = req.query; 

    const tables = await timeTableService.getTimeTables(userId, classId);
    res.json(tables);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createTimeTable, getTimeTables };
