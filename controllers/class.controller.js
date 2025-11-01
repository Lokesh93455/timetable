const classService = require("../services/class.service");

exports.createClass = async (req, res) => {
  try {
    const { value } = req.body;
    const userId = req.user?._id;

    console.log("createClass called with:", { userId, value });

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    if (!value) {
      return res.status(400).json({ message: "Class value is required" });
    }

    const result = await classService.createClass(userId, value);

    res.status(201).json({
      message: "Class processed successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMyClasses = async (req, res) => {
  try {
    const userId = req.user._id;
    const classes = await classService.getUserClasses(userId);
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
