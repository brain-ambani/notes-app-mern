const User = require("../models/userModel");

// Function to register a user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).json({ error: "User already exists" });

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ id: user._id, username, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };
