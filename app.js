const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const Handlebars = require('handlebars')

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended:true}))

Handlebars.registerHelper('if_job', function(job, equalJob, options){
  if(job === equalJob){
    return options.fn(this)
  }else{
    return options.inverse(this)
  }
})


app.get('/', (req, res)=>{
  res.render('index')
})

app.post('/', (req, res)=>{
  const options = req.body.job
  const trashTalk = generateTalk(options) 
  const job = req.body.job
  // console.log(options)
  // console.log( generateTalk(options) )
  res.render('index', {trashTalk:trashTalk, job:job})
})


app.listen(port, ()=>{
  console.log(`Express is running on localhost:${port}`)
})

