const User = require('../models/User')

exports.getProfile = async (req, res) => {
  res.json(req.user)
}

exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id)
  if (!user) return res.status(404).json({ message: 'User not found' })

  user.username = req.body.username || user.username
  user.email = req.body.email || user.email
  await user.save()

  res.json(user)
}
