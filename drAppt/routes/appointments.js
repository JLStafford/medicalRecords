var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database : 'drappointments'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * FROM appointments')
    .then(function(data) {
      console.log(data.rows);
      res.render('appointments', {appointments: data.rows});
    })
});

module.exports = router;
