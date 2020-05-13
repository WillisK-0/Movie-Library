let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{movies: movies})
})

router.get('/create',(req,res)=>{
    res.render('createMovie')
})

router.get('/confirm',(req,res)=>{
    res.render('success')
})

router.post('/create',(req,res)=>{
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let imageURL = req.body.imageURL


    console.log(title)

    let movie = {title: title, description: description, genre: genre, imageURL: imageURL}
    movies.push(movie)
    res.redirect('/movies/confirm')
})

router.post('/delete-movie',(req,res)=>{
    let title = req.body.title
    movies = movies.filter(movie => movie.title != title)
    res.redirect('/movies')
})

module.exports = router