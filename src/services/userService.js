const User = require('../models/userModel');

// Function to find a user by username
const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

module.exports = { findUserByUsername };
