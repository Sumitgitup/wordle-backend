

const  wordList = require('../wordlist.json')
const express = require('express');
const router = express.Router();


router.get('/words',  (req, res ) => {

    const words = wordList[(Math.floor(Math.random() * wordList.length))];
    console.log(words);
    
    res.json({words})

})

module.exports = router;