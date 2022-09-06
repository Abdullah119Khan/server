const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// Exist User Login
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    if(!user) return res.status(403).json({ message: 'User not found' });

    const matchPassword = await bcrypt.compareSync(password, user.password)
    if(!matchPassword) return res.status(403).json({ message: 'Password mismatch!!!' });

    const token = jwt.sign({ id: user._id, email: user.email }, 'test', { expiresIn: '1h' })

    return res.status(201).json({ token, result: user})

  } catch(err) {
    return res.status(500).json(err)
  }
}

// Create User
exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const user = await User.findOne({ email })
    if(user) return res.status(403).json({ message: 'User already exists' });

    if(password !== confirmPassword) return res.status(403).json({ message: 'Password not match!!' })

    const hashPass = bcrypt.hashSync(password, 12)

    const newUser = await User.create({ email, password: hashPass, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, 'test', { expiresIn: '1h' })

    return res.status(201).json({ token, result: newUser })

  } catch(err) {
    return res.status(500).json(err)
  }
}