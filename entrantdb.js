'use strict';

// var mysql = require('mysql');
//
// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'signupnow10',
//     database : 'helloworlddb'
// });
//
// //Connect
// connection.connect(function(err) {
//     if (err) throw err;
// });

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


//Entrant Class Constructor
var Entrant = function (entrant) {
  this.first_name= entrant.first_name ;
  this.last_name= entrant.last_name;
  this.address_1= entrant.address_1 ;
  this.address_2= entrant.address_2 ;
  this.city= entrant.city ;
  this.state= entrant.state ;
  this.zip= entrant.zip ;
  this.country = entrant.country;
}

//Save the Entrant's information to the database.
Entrant.saveEntry = function (newEntry, result) {
    connection.query("INSERT INTO entrant set ?", newEntry, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }

    });
};

module.exports = Entrant;

// Port: 3306
// Pwd: signupnow10
