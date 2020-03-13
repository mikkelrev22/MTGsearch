const express = require('express')
const app = express()
const PORT = process.env.port || 42069
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.use(express.static(__dirname + '/client/public'))
app.get('/cards/:name', (req, res)=>{
  const {name} = req.params
  axios.get(`https://api.scryfall.com/cards/named?fuzzy=${name}`)
  .then((data)=>{
    let resCardObj = {image: data.data.image_uris.small, name: data.data.name, text: data.data.oracle_text, colors: data.data.colors, mana_cost: data.data.mana_cost, cmc: data.data.cmc, price: data.data.prices.usd}
    res.send(resCardObj)
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