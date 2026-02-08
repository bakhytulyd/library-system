require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')

connectDB()

const app = express()
app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/resource', require('./routes/resourceRoutes'))

app.use('/api/books', require('./routes/bookInfoRoutes'))

app.get('/', (req, res) => res.send('Server is running!'))

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port', PORT))
