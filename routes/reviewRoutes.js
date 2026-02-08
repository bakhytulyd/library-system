const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const c = require('../controllers/reviewController')

router.post('/:bookId', auth, c.addReview)
router.get('/:bookId', auth, c.getReviews)

module.exports = router
