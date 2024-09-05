const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (_req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};



const register = async (req, res) => {
  try {
    const { username, email, password, phone, course } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,  
      course,
      phone
    });

    await newUser.save();

    res.status(201).json({
      msg: "Registration Successful",
      userId: newUser._id
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    console.log(`Stored Hashed Password: ${userExist.password}`); 

    const isPasswordValid = await userExist.comparePassword(password);
    console.log(`Password Valid: ${isPasswordValid}`);  

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { home, register, login };
