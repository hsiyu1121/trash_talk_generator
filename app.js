const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{
  res.render('index')
})

app.post('/', (req, res)=>{
  const option = req.body
  const trashTalk = generateTalk(option) 
  const person = option.job
  res.render('index', {trashTalk:trashTalk, person:person})
})

app.listen(port, ()=>{
  console.log(`Express is running on localhost:${port}`)
})

