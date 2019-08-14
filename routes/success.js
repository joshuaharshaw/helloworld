var express = require('express');
var router = express.Router();

// Get the Success page
router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Express' });
});

module.exports = router;
