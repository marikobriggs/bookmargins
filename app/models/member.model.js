/**
 * @file Constructor and CRUD functions for "member" object  
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

import sql from "./db.js"

// Member constructor 
const Member = function(member) {
    // member id 
    this.firstName = member.firstName
    this.lastName = member.lastName
    this.booksRead = member.booksRead
    this.reviews = member.reviews
    this.currentBook = member.currentBook
    this.bookClubID = member.bookClubID
}
