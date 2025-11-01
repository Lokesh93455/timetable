const express = require("express");
const { createTimeTable, getTimeTables } = require("../controllers/timetable.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, createTimeTable);
router.get("/:classId", protect, getTimeTables);

module.exports = router;
