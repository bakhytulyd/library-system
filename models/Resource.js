const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['planned', 'reading', 'completed'],
    default: 'planned'
  }
}, { timestamps: true })

module.exports = mongoose.model('Resource', resourceSchema)
