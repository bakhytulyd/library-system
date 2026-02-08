const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const c = require('../controllers/rentalController')

router.post('/:bookId', auth, c.rentBook)
router.get('/', auth, c.getRentals)

module.exports = router
