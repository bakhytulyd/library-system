const validator = require('validator')

exports.validateRegister = (req, res, next) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }
  if (!validator.isLength(password, { min: 6 })) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' })
  }
  next()
}

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }
  next()
}

exports.validateBookSearch = (req, res, next) => {
  const { query } = req.query
  if (!query || !query.trim()) {
    return res.status(400).json({ message: 'Search query is required' })
  }
  next()
}
