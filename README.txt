The WS named ws_childrenBook

route /all
http://ec2-52-28-114-19.eu-central-1.compute.amazonaws.com:8080/all
you get all children books

route /childrenBook/:Bookid 
http://ec2-52-28-114-19.eu-central-1.compute.amazonaws.com:8080/childrenBook/1
(insted of Bookid you need to enter some number 1-10)
you get the book you have choosen by id

route /BooksByAge/:BookAge
http://ec2-52-28-114-19.eu-central-1.compute.amazonaws.com:8080/BooksByAge/3
(insted of BookAge you need to enter age number)
you get all books you can read from the age you have choosen.
