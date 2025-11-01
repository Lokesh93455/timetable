const subjectService = require("../services/subject.service");

const addSubject = async (req, res) => {
  try {
    const newSubject = await subjectService.addSubject(req.user._id, req.body);
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await subjectService.getSubjects(req.user._id);
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addSubject, getSubjects };
