/**
 * @file Constructor and CRUD functions for "book" object  
 * @author Mariko 
 * following this tutorial: https://bezkoder.com/node-js-rest-api-express-mysql/
 */

import sql from "./db.js" 

// Book constructor 
const Book = function(book) {
    this.isbn = book.isbn
    this.title = book.title
    this.author = book.author
    this.genre = book.genre
    this.releaseDate = book.releaseDate
}

//  Create 
//  * Create a new book
 
//  Read 
//  * Find a book by ISBN
//  * Get all books 
 
//  Update 
//  * Update a book by ISBN
 
//  Delete 
//  * Remove a book by ISBN
//  * Remove all books 