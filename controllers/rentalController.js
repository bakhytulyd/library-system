const Rental = require('../models/Rental')

exports.rentBook = async (req, res) => {
  const rental = await Rental.create({
    user: req.user._id,
    book: req.params.bookId,
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  })
  res.json(rental)
}

exports.getRentals = async (req, res) => {
  const rentals = await Rental.find({ user: req.user._id })
  res.json(rentals)
}
