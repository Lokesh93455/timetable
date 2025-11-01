const Class = require("../models/class.model");

const createClass = async (userId, classNumber) => {
  if (classNumber < 1 || classNumber > 12) {
    throw new Error("Class number must be between 1 and 12");
  }

  const existingClass = await Class.findOne({ user: userId, value: classNumber });

  if (existingClass) {
    throw new Error(`Class ${classNumber} already exists for this user`);
    // return existingClass;
  }

  const newClass = await Class.create({
    value:classNumber,
    user: userId,
  });

  return newClass;
};

const getUserClasses = async (userId) => {
  return await Class.find({ user:userId }).sort({ value: 1 });;
};

module.exports = { createClass, getUserClasses };
