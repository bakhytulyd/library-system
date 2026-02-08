const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const { searchBooks } = require('../controllers/bookInfoController')

router.get('/search', protect, searchBooks)

module.exports = router
