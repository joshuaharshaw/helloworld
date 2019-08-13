var express = require('express');
var router = express.Router();
var Entrant = require('../entrantdb.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var myEntrant =  new Entrant(req.body);
  Entrant.saveEntry(myEntrant, function(result, recID){
        var response = {
            recID : recID,
            result:result
        }

        if (response.recID) {
          res.redirect('/users');
        } else
        {
          res.send(response);
        }
  });

});

module.exports = router;
