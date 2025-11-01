const Subject = require("../models/subject.model");

const addSubject = async (userId, data) => {
  const existing = await Subject.findOne({ user: userId, code: data.code });

  if (existing) {
    const error = new Error(`Subject code:${data.code } already exists for this user`);
    error.statusCode = 400;
    throw error;
  }

  const subject = new Subject({ ...data, user: userId });
  return await subject.save();
};

const getSubjects = async (userId) => {
  return await Subject.find({ user: userId });
};

module.exports = { addSubject, getSubjects };
