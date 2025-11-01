const Staff = require("../models/staff.model");

const addStaff = async (userId, data) => {
  const existing = await Staff.findOne({
    user: userId,
    $or: [{ email: data.email }, { phone: data.phone }],
  });

  if (existing) {
    const error = new Error("Staff with same email or phone already exists for this user");
    error.statusCode = 400;
    throw error;
  }

  const staff = new Staff({ ...data, user: userId });
  return await staff.save();
};

const getStaffs = async (userId) => {
  return await Staff.find({ user: userId });
};

module.exports = { addStaff, getStaffs };
