const express = require("express");
const { createClass, getMyClasses } = require("../controllers/class.controller");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/create", protect, createClass);
router.get("/my", protect, getMyClasses);

module.exports = router;
