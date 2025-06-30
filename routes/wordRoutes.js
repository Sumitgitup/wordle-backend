const express = require('express');
const router = express.Router();
const wordList = require('../wordlist.json');

router.get('/', (req, res) => {
  res.send('✅ Wordle API is live!');
});

router.get('/words', (req, res) => {
  const word = wordList[Math.floor(Math.random() * wordList.length)];
  res.json({ word });
});

module.exports = router;
