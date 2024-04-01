const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// Function to register a user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).json({ error: "User already exists" });

  try {
    const user = await User.create({ username, email, password });
    res
      .status(201)
      .json({ id: user._id, username, email, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  try {
    user && (await user.matchPassword(password));
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

module.exports = { registerUser, loginUser };
