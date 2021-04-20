# CRUD Functions and REST Routes (WIP)
Outlining what CRUD (Create, Read, Update, Delete) functions and REST routes for each database table looks like.

## Book 
Create 
* Create a new book

Read 
* Find a book by ISBN
* Get all books 

Update 
* Update a book by ISBN

Delete 
* Remove a book by ISBN
* Remove all books 

Routes 
* `/books`: GET, POST, DELETE 
* `/books/isbn`: GET, PUT, DELETE 

## Author 
Create  
* Create a new author

Read 
* Find an author by name (?) 
* Get all authors 

Update 
* Update an author by author id 

Delete 
* Delete an author by author id

Routes
* `/author`: POST, GET
* `/author/authorId`: PUT, DELETE 


## Member 
Create 
* Create a new member

Read 
* View all members 
* View member by member id

Update 
* Update a member by member id 

Delete 
* Delete a member by member id 
* Delete all members 

Routes
* `/member`: POST, GET, DELETE
* `/member/memberId`: GET, PUT, DELETE

## ReadingDetails 
Create 
* Create a new reading detail

Read 
* View all reading details by member id 
* View all reading details by bookclub id 

Update 
* Update reading details by isbn && bookclub id (?)

Delete 
* Delete a reading detail by bookclub id (?)
* Delete all reading details 

Routes 
* Following need to be checked for correctness 
* `/readingDetails`: POST, DELETE 
* `/readingDetails/bookClubs/{bookClubId}`: GET, DELETE
* `/readingDetails/bookClubs/{bookClubId}/isbn/{isbn}`: PUT 
* `/readingDetails/members/{membersId}`: GET



## BookClub 

Create 
* Create a new book club 

Read 
* View all book clubs by book club id

Update 
* Update a book club by book club id 

Delete 
* Delete a book club by book club id 
* Delete all book clubs 

Routes: 
* `/bookclub`: POST, DELETE
* `/bookclub/bookclubId`: GET, PUT, DELETE

