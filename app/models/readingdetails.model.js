/**
 * @file Constructor and CRUD functions for "reading details" object  
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

import sql from "./db.js"

// Reading Details constructor 
const ReadingDetails = function(readingDetails) {
    this.memberID = readingDetails.memberID
    this.bookClubID = readingDetails.bookClubID
    this.isbn = readingDetails.isbn
    this.progress = readingDetails.progress
    this.currentDeadline = readingDetails.currentDeadline
    this.meetingDates = readingDetails.meetingDates
}



