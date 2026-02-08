exports.getProfile = async (req, res) => {
  res.json(req.user)
}

exports.updateProfile = async (req, res) => {
  const user = req.user
  user.username = req.body.username || user.username
  await user.save()
  res.json(user)
}
