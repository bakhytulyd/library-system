const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const c = require('../controllers/bookController')

router.post('/', auth, c.createBook)
router.get('/', auth, c.getBooks)
router.get('/:id', auth, c.getBook)
router.put('/:id', auth, c.updateBook)
router.delete('/:id', auth, c.deleteBook)
router.get('/:id/buy', auth, c.buyBook)

module.exports = router
