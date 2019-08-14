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

        if (response.result) {
          res.send(response);
        } else
        {
          res.redirect('/success');
        }
  });

});

module.exports = router;
