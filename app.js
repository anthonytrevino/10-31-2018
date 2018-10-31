const express = require('express')
const mustacheExpress = require('mustache-express')
let bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port,function(){
  console.log("Server is running..")
})

let movies =[{movieTitle:"Bruce Almighty", movieGenre:"Comedy", movieDesc:" A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world. Bruce Nolan, a television reporter in Buffalo, N.Y., is discontented with almost everything in life despite his popularity and the love of his girlfriend Grace ."},{movieTitle:"Deadpool", movieGenre:"Comedy", movieDesc:"whose real name is Wade Wilson, is a disfigured and deeply disturbed mercenary and assassin with the superhuman ability of an accelerated healing factor and physical prowess."},{movieTitle:"It",movieGenre:"Scary", movieDesc:"Bill Denbrough (Jaeden Lieberher) helps his little brother Georgie (Jackson Robert Scott) make a paper sailboat, calling it the S.S. Georgie. Georgie wants to go outside to sail it in the pouring rain, but Bill is too sick to join him. The brothers hug before Georgie runs out to play."},{movieTitle:"Shaun of the Dead", movieGenre:"Scary", movieDesc:"Shaun of the Dead is a 2004 horror comedy film directed by Edgar Wright, written by Wright and Simon Pegg, and starring Pegg and Nick Frost. Pegg plays Shaun, a directionless Londoner who is caught in an apocalyptic zombie uprising"}]

app.engine('mustache',mustacheExpress())
app.set("views","./views")
app.set("view engine", "mustache")

// displays jSON format of movies
app.get('/',function(req,res){
  res.render('index', {movies:movies})
})

app.post('/addMovie',function(req,res){
  console.log(req.body)
  var newMovie = req.body
  movies.append(newMovie)
})
