
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Only allow role to be set to 'educator' or 'learner' via registration
    let userRole = 'learner';
    if (role === 'educator') {
      userRole = 'educator';
    }
    user = new User({ name, email, password: hashedPassword, role: userRole });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.error('Login error: User not found for email', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error('Login error: Password mismatch for user', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    let token;
    try {
      token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    } catch (jwtError) {
      console.error('JWT sign error:', jwtError);
      return res.status(500).json({ message: 'Token generation error' });
    }
    // Exclude password from user details
    const { password: userPassword, ...userData } = user.toObject();
    res.json({ token, user: userData });
  } catch (error) {
    console.error('Login server error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
