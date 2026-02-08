const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Rental', rentalSchema)
