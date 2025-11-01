const express = require("express");
const { addEntry, getEntries } = require("../controllers/timetableEntry.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, addEntry);
router.get("/", protect, getEntries);

module.exports = router;
