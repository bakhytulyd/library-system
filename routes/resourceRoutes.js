const router = require('express').Router()
const protect = require('../middleware/authMiddleware')
const {
  createResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource
} = require('../controllers/resourceController')

router.post('/', protect, createResource)
router.get('/', protect, getResources)
router.get('/:id', protect, getResourceById)
router.put('/:id', protect, updateResource)
router.delete('/:id', protect, deleteResource)

module.exports = router
