const express = require("express");
const { addSubject, getSubjects } = require("../controllers/subject.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, addSubject);
router.get("/", protect, getSubjects);

module.exports = router;
