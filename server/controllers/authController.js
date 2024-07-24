const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Create a new user
        const user = new User({ email, password });
        await user.save();

        // Generate a token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        console.error('Signup error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

