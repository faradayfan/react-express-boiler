const axios = require('axios')
const express = require('express');
const router = express.Router();

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`


router.get('/', function (req, res, next) {
  axios.get(url)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'failed to complete request' })
    })
})

module.exports = router;