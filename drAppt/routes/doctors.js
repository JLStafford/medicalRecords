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
  knex.raw('SELECT * FROM doctors')
    .then(function(data) {
      console.log(data.rows);
      res.render('doctors', {doctors: data.rows});
    })
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM doctors WHERE id = ${req.params.id}`)
    .then(function(data) {
      console.log(data.rows);
      res.render('doctor', {doctor: data.rows[0]});
    })
});

module.exports = router;
