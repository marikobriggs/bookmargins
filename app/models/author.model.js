/**
 * @file Constructor and CRUD functions for "author" object  
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

import sql from "./db.js"

// Author constructor 

const Author = function(author) {
    // author id 
    this.firstName = author.firstName
    this.lastName = author.lastName
    this.numOfBooks = author.numOfBooks
    this.titleOfBooks = author.titleOfBooks
}
