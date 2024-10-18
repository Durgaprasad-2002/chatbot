const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(500).json({
        message: "User not Found",
      });
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      return res.status(500).json({
        message: "password not matched",
      });
    }

    user.password = null;

    const token = jwt.sign({ ...user }, "Durga@4c3", {
      expiresIn: "12h",
    });

    return res.status(200).json({
      message: "Successfully Logged In",
      username: user.username,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to Login, Try Again",
      data: error,
    });
  }
};

const handleRegister = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return res.status(500).json({
        message: "Email already existed, try another",
      });
    }

    const user = new User({
      email: email,
      username: username,
      password: password,
    });

    const result = await user.save();

    return res.status(201).json({
      message: "Account is Registered",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Got an error while resgistering, try again!",
      data: error,
    });
  }
};

const handleUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

module.exports = { handleLogin, handleRegister, handleUsers };
