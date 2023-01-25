const express = require('express')
const app = express()
const port = 3000
const {url} = require('./appid')
const https = require('node:https')

app.get('/',(req,res) => {


    https.get(url, function (response) {
      console.log('Satatus code: ',response.statusCode);
      response.on('data', function(data) {

         const weatherData = JSON.parse(data)
         const weatherTemp = weatherData.main.temp
         const weatherDescription = weatherData.weather[0].description
         console.log(`temp: ${weatherTemp}`)
         console.log(`description: ${weatherDescription}`);
      })

    })

    res.send('running')
 })

 app.listen(port, () => {
    console.log(`listening on port: ${port}`);
 })