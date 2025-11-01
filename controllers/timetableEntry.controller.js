const timeTableEntryService = require("../services/timetableEntry.service");

const addEntry = async (req, res) => {
  try {
    const newEntry = await timeTableEntryService.addEntry(req.user._id, req.body);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const { classId } = req.query;
    const entries = await timeTableEntryService.getEntries(req.user._id, classId);
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addEntry, getEntries };
