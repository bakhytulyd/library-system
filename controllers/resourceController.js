const Resource = require('../models/Resource')

exports.createResource = async (req, res) => {
  const resource = await Resource.create({
    user: req.user._id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  })
  res.status(201).json(resource)
}

exports.getResources = async (req, res) => {
  const resources = await Resource.find({ user: req.user._id })
  res.json(resources)
}

exports.getResourceById = async (req, res) => {
  const resource = await Resource.findById(req.params.id)
  if (!resource) return res.status(404).json({ message: 'Not found' })
  res.json(resource)
}

exports.updateResource = async (req, res) => {
  const resource = await Resource.findById(req.params.id)
  if (!resource) return res.status(404).json({ message: 'Not found' })

resource.title = req.body.title ?? resource.title
resource.description = req.body.description ?? resource.description
resource.status = req.body.status ?? resource.status   
  await resource.save()

  res.json(resource)
}

exports.deleteResource = async (req, res) => {
  await Resource.findByIdAndDelete(req.params.id)
  res.json({ message: 'Resource deleted' })
}
