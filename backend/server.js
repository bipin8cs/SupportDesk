const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const colors = require('colors')


//connect to data base
connectDB();
const app = express()

app.use(express.json())//this will allow us to send raw json
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))
app.use('/api/users/login', require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
