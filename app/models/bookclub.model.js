/**
 * @file Constructor and CRUD functions for "bookclub" object  
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

import sql from "./db.js"

// Book Club constructor 
const BookClub = function (bookClub) {
    // bookclub ID 
    this.name = bookClub.name
    this.numOfMembers = bookClub.numOfMembers
    this.members = bookClub.members
    this.currentBook = bookClub.currentBook
    this.booksRead = bookClub.booksRead
}

