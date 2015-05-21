var Book = '{ "childrenBook" : [' +
'{ "id":"1" , "name":"The Very Hungry Caterpillar" , "author":"Eric Carle" , "fromage":"3" },' +
'{ "id":"2" , "name":"Here Comes the Tooth Fairy Cat" , "author":"Claudia Rueda" , "fromage":"3" },' +
'{ "id":"3" , "name":"Llama Llama Red Pajama" , "author":"Anna Dewdney" , "fromage":"3" },' +
'{ "id":"4" , "name":"Anna & Elsa" , "author":"Erica David" , "fromage":"6" },' +
'{ "id":"5" , "name":"Frozen Fever" , "author":"Victoria Saxon" , "fromage":"6" },' +
'{ "id":"6" , "name":"Hello, Olaf" , "author":"Andrea Posner-Sanchez" , "fromage":"6" },' +
'{ "id":"7" , "name":"Annas Best Friends" , "author":"Christy Webster" , "fromage":"6" },' +
'{ "id":"8" , "name":"My life as a gamer" , "author":"Janet Tashjian" , "fromage":"9" },' +
'{ "id":"9" , "name":"Gone Crazy in Alabama" , "author":"Rita Williams-Garcia" , "fromage":"9" },' +
'{ "id":"10" , "name":"Harry Potter and the Sorcerers Stone" , "author":"J.K. Rowling" , "fromage":"9" } ]}';

var obj = JSON.parse(Book);

console.log("hello, \n you have 3 functions to use: \n getAllBooks --> route /all \n getBookById--> route /childrenBook/:Bookid \n getBookByAge --> route /BooksByAge/:BookAge ");

exports.getAllBooks = function() {
	console.log("route /all ---> getAllBooks");
	return obj;
};

exports.getBookById = function  (id) {
	var text = 'This id dosnt exist'; 
	console.log("route /childrenBook/:Bookid ---> getBookById");
	if (id > 10)
		return text;

	for (i in obj.childrenBook)
	{
		if (obj.childrenBook[i].id == id)
			return obj.childrenBook[i];	
	}
};

exports.getBookByAge = function(age){
	var text = 'We do not have books to read from the age you have choosen ';
	if (age >= 10 || age < 3)
		return text;
	console.log("route /BooksByAge/:BookAge ---> getBookByAge");
	var BookTemp = [];
	for (i in obj.childrenBook)
	{
		if ( obj.childrenBook[i].fromage <= age)
			    BookTemp.push([i, obj.childrenBook[i]]);
	}
	return BookTemp;
};