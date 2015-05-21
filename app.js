var express = require('express');
var app = express();
var url = require('url');
var childrenBook = require('./ws_childrenBook');

app.get ('/all', function (req, res) {
	res.set('heder1:' , 'you get all books');
	res.json(childrenBook.getAllBooks());
});

 app.get('/childrenBook/:Bookid', function (req, res) {
 	res.set('heder2:' , 'you get the book by the id you sent in the url');
 	res.json(childrenBook.getBookById(req.params.Bookid));
 });

 app.get('/BooksByAge/:BookAge', function(req, res) {
 	res.set('heder3:' , 'you get the books you can read from age you sent in the url');
 	res.json(childrenBook.getBookByAge(req.params.BookAge));
 });

app.listen(8080);
console.log('listen 8080');