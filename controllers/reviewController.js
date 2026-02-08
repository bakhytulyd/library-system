const Review = require('../models/Review')

exports.addReview = async (req, res) => {
  const review = await Review.create({
    rating: req.body.rating,
    comment: req.body.comment,
    user: req.user._id,
    book: req.params.bookId
  })
  res.json(review)
}

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ book: req.params.bookId })
  res.json(reviews)
}
