require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

// Connect to MongoDB
connectDB()

const app = express()
app.use(express.json())

// Routes
app.use('/api/books', require('./routes/bookInfoRoutes'))

// Test route
app.get('/', (req, res) => res.send('Server is running!'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port', PORT))
