/**
 * @file Web server for bookmargins API. 
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

// importing express + json, no need for bodyParser 
import pkg from 'express';
const { express, json } = pkg;

require('dotenv').config() 

const app = pkg()
const PORT = 3000

// parse requests of content-type: application/json
app.use(pkg.json())

// parse requests of content-type: application/x-www-form-urlencoded 
app.use(pkg.urlencoded({ extended: true }))

// simple route 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bookmargins" })
})

// set port + listen for requests 
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + ".")
}) 

