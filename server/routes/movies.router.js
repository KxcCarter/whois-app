const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET routes
// GET all movies
router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY movies.id;`;

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

// GET single movie
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT movies.id, movies.title, movies.description, movies.poster, array_agg(genres.name) AS genres FROM movies
                JOIN movies_genre ON movies.id = movies_genre.movie_id
                JOIN genres ON genres.id = movies_genre.genre_id
                WHERE movies.id = $1
                GROUP BY movies.id;`;
  pool
    .query(query, [id])
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('GET error: ', err);
      res.sendStatus(500);
    });
});

// GET single movie by title
router.get('/search/:title/title', (req, res) => {
  const title = req.params.title;
  console.log(req.params);
  const query = `SELECT movies.id, movies.title, movies.description, movies.poster, array_agg(genres.name) AS genres FROM movies
                JOIN movies_genre ON movies.id = movies_genre.movie_id
                JOIN genres ON genres.id = movies_genre.genre_id
                WHERE movies.title = $1
                GROUP BY movies.id;`;
  pool
    .query(query, [title])
    .then((dbRes) => {
      console.log(dbRes.rows);
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
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;

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
