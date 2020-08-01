const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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
  const query = `SELECT movies.title, movies.description, movies.poster, genres.name FROM movies
                JOIN movies_genre on movies_genre.movie_id = movies.id
                JOIN genres on genres.id = movies_genre.genre_id
                WHERE movies.id = $1;`;
  // NOTE: This query needs to include genres. I need to use a join here.
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
  const movieTitle = req.body.title;
  const moviePoster = req.body.poster;
  const movieDescription = req.body.description;

  pool
    .query(query, [movieTitle, moviePoster, movieDescription])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST error: ', err);
      res.sendStatus(500);
    });
});
// END POST ROUTE

// PUT route

router.put('/edit/:id', (req, res) => {
  const query = `UPDATE movies SET title = $1, description = $2 WHERE id = $3;`;
  const id = req.params.id;
  const updatedTitle = req.body.updatedTitle;
  const updatedDescription = req.body.updatedDescription;

  pool
    .query(query, [updatedTitle, updatedDescription, id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('PUT error: ', err);
      res.sendStatus(500);
    });
});
//END PUT ROUTE

// DELETE route
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM movies WHERE id = $1;`;
  // NOTE! I can't just delete from the movies table. I also have to delete from the movies_genre table, and I have to do that FIRST.
  pool
    .query(query, [id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('DELETE error: ', err);
      res.sendStatus(500);
    });
});

// END DELETE ROUTE

module.exports = router;
