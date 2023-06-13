
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser");
const port = 8080



// Parse JSON bodies (as sent by API clients)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
const { connection } = require('./connector')


app.get('/api/totalRecovered', async (req, res) => {
    try { 
      const result = await connection.aggregate([
  
        {$group:{_id:"total","recovered":{$sum:"$recovered"}}},
        
      ]) 
      res.status(200).json({
        data: result[0]
      })
    } catch (e) {
      res.status(500).json({
        status: 'Failed',
        message: e.message
      })
    }
  })
  
  
  app.get('/api/totalActive', async (req, res) => {
    try {
      const result = await connection.aggregate([
        {$project:{"diff":{$subtract:["$infected","$recovered"]}}},
        {$group:{_id:"total","active":{$sum:"$diff"}}}
       
      ]) 
      res.status(200).json({
        data: result[0]
      })
    } catch (e) {
      res.status(500).json({
        status: 'Failed',
        message: e.message
      })
    }
  })
  app.get('/api/totalDeath', async (req, res) => {
    try {
      const result = await connection.aggregate([
  
        {$group:{_id:"total","death":{$sum:"$death"}}}
       
      ]) 
     
      res.status(200).json({
        data: result[0]
      })
    } catch (e) {
      res.status(500).json({
        status: 'Failed',
        message: e.message
      })
    }
  })
  
  
  app.get('/api/hotspotStates', async (req, res) => {
    try {
      const result = await connection.aggregate([
       {$project:{_id:0,"state":"$state",
       "rate":{$round:[{$divide:[{$subtract:["$infected","$recovered"]},"$infected"]},5]}}}
      
       
      ]) 
      res.status(200).json({
        data: result
      })
    } catch (e) {
      res.status(500).json({
        status: 'Failed',
        message: e.message
      })
    }
  })
  
  app.get('/api/healthyStates', async (req, res) => {
    try {
      const result = await connection.aggregate([
       {$project:{_id:0,"state":"$state",
       "mortality":{$round:[{$divide:["$death","$infected"]},5]}}}
      
       
      ]) 
      res.status(200).json({
        data: result
      })
    } catch (e) {
      res.status(500).json({
        status: 'Failed',
        message: e.message
      })
    }
  })

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;