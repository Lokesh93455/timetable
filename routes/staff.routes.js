const express = require("express");
const { addStaff, getStaffs } = require("../controllers/staff.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, addStaff);
router.get("/", protect, getStaffs);

module.exports = router;
