const express = require('express');
const axios = require('axios');

const whoIs = require('../api/whoIs');

const router = express.Router();

router.get('/', (req, res) => {
  whoIs
    .get('/', {
      params: {
        domainName: req.query.domainName,
      },
    })
    .then((response) => {
      console.log('Success');
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
