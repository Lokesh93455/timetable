const staffService = require("../services/staff.service");

const addStaff = async (req, res) => {
  try {
    const newStaff = await staffService.addStaff(req.user._id, req.body);
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getStaffs = async (req, res) => {
  try {
    const staffs = await staffService.getStaffs(req.user._id);
    res.json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addStaff, getStaffs };
