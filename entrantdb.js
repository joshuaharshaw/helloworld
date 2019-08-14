'use strict';

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

//Entrant Class Constructor
var Entrant = function (entrant) {
  this.queryValues = [entrant.first_name, entrant.last_name, entrant.address_1, entrant.address_2, entrant.city, entrant.state, entrant.zip, entrant.country] ;
}

//Save the Entrant's information to the database.
Entrant.saveEntry = function (newEntry, result) {

    client.query("INSERT INTO entrant (first_name, last_name,address_1,address_2, city, state, zip, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", newEntry.queryValues, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });

};

module.exports = Entrant;
