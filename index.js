const express = require('express')
const rateRestaurants = require('./restaurantapis.json')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(5500,() => {
    console.log ('Its Working 5500')
})
const handleWriteFile = () => {
const jsonRateRestaurants = JSON.stringify(rateRestaurants) 
fs.writeFile('.restaurantapis.json', jsonRateRestaurants, error => console.error(error)) 
}

app.get('/', (request, response) => {
    response.send(rateRestaurants)
})

app.post('/', (req, res) => {
    if (req.body.rating && req.body.name) {
      rateRestaurants.push(req.body) // returns length of array
  
      handleWriteFile()
      res.send(rateRestaurants)
    } else {
      res.send('no body found or wrong body info')
    }
  })
  
  app.put('/', (req, res) => {
    if (req.query.rating) {
      const itemFound = rateRestaurants.find(eachItem => (eachItem.rating ? eachItem.rating === req.query.rating : undefined))
  
      // 1.1 find index to item found
      const indexOfItem = rateRestaurants.indexOf(itemFound)
  
      // 2. update that item with the new info
      rateRestaurants[indexOfItem] = req.body
  
      handleWriteFile()
      res.send(rateRestaurants)
    } else {
      res.send('no query params found')
    }
  })
  
  app.delete('/', (req, res) => {
    const itemFound = rateRestaurants.find(x => x.rating === req.query.rating)
    const indexOfItem = rateRestaurants.indexOf(itemFound)
  
    rateRestaurants.splice(indexOfItem, 1)
  
    handleWriteFile()
    res.send(rateRestaurants)
  })

