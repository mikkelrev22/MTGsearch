const express = require('express')
const app = express()
const PORT = process.env.port || 42069

app.listen(PORT, ()=>{
  console.log(`server is now listening on Port ${PORT}`)
})