const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use('/movies', moviesRouter)

global.movies = []





app.listen(3000,()=>{
    console.log('Server is running...')
})