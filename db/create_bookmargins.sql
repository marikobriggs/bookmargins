USE bookmarginsdb; 

DROP TABLE IF EXISTS books; 
CREATE TABLE books(isbn INT PRIMARY KEY, title VARCHAR(255), author VARCHAR(255)); 