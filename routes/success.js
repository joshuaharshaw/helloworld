var express = require('express');
var router = express.Router();

// Get the Success page
router.get('/success', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
