const router = require('express').Router()
const { searchBooks } = require('../controllers/bookInfoController')
const { validateBookSearch } = require('../middleware/validateMiddleware')

router.get('/search', validateBookSearch, searchBooks)

module.exports = router
