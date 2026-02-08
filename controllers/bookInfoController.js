const axios = require('axios')

exports.searchBooks = async (req, res) => {
  const { query } = req.query
  if (!query) return res.status(400).json({ message: 'Query is required' })

  try {
  const response = await axios.get(
  `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=AIzaSyBoWJmMoeuQerJ4gHwpJ9m6UyOGCBfiKRc`
  )
  console.log(response.data)

    const books = response.data.items?.map(item => ({
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || [],
      description: item.volumeInfo.description || '',
      thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
      infoLink: item.volumeInfo.infoLink || ''
    })) || []

    res.json(books)
  } catch (error) {
  console.error(error.response?.data || error.message)
  res.status(500).json({ message: 'Failed to fetch books', error: error.message })
}
}
