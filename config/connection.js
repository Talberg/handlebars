// Set up MySQL connection.
var mysql = require("mysql");


var connection =
 mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Greblat2",
  database: "cat_db"
});


// Make connection.


// Export connection for our ORM to use.




var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = 
    mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: "Greblat2",
     database: "burger_db"
   });
};

var mysql = require('mysql');


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;



