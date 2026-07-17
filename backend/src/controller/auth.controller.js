const User = require("../models/User.js");
const { generateToken } = require("../utils/generateToken.js");

module.exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(200).json({
        message: "User aleready exits",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      role,
    });

    res.status(200).json({
      message: "User register successfully",
      token: generateToken(user._id),
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(500).json({
        message: "User Did not exist",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    res.json({
      message: "User Login Successfully",
      token: generateToken(userExist._id),
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
