const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//  TODO: build routes here

// GET routes
// movies
router.get('/movies', (req, res) => {
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

// GET specific movie
router.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM movies WHERE id = $1;`;

  pool
    .query(query, [id])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('GET error: ', err);
      res.sendStatus(500);
    });
});

// genres
router.get('/genres', (req, res) => {
  const query = `SELECT * FROM genres;`;

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
// END GET ROUTES

// POST route

router.post('/', (req, res) => {
  const query = `INSERT INTO "movies"
  ("title", "poster", "description")
VALUES ($1, $2, $3)`;
  // TODO: finish skeleton req.body destructuring
  const movieTitle = req.body;
  const moviePoster = req.body;
  const movieDescription = req.body;

  pool
    .query(query, [])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST error: ', err);
      res.sendStatus(500);
    });
});

// PUT route

// DELETE route

module.exports = router;
