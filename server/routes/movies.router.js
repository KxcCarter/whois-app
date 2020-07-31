const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//  TODO: build routes here

// GET route

router.get('/', (req, res) => {
  const query = `SELECT * FROM movies;`;

  pool
    .query(query)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('GET error: ', err);
      res.sendStatus(500);
    });
});

// POST route

// PUT route

// DELETE route

module.exports = router;
