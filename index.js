const express = require('express')
const app = express()
const PORT = process.env.port || 42069
const axios = require('axios')

app.get('/cards/:name', (req, res)=>{
  console.log(req.params.name)
  axios.get(`https://api.scryfall.com/cards/named?fuzzy=${req.params.name}`)
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.use((req, res, next)=>{
  res.status(404).send('Sorry, I could not find that')
})

app.use((req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Something broke')
})

app.listen(PORT, ()=>{
  console.log(`server is now listening on Port ${PORT}`)
})