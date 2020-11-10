const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
// const mongoose = require('mongoose')
// const blogsRoutes = require('./routes/blog_routes')

// express app
const app = express()

// Constants
const PORT = 8000
const HOST = '0.0.0.0'

// register view engine
app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// public dir
app.use(express.static(__dirname + '/public'))

// this is needed to access the req.body
app.use(express.urlencoded({ extended: true }))

// middleware
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' })
})

// 404 - must be at the bottom since it applies to all the routes
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
