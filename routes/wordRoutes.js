
const words = require('../wordlist.json')

const express = require('express');
const router = express.Router();


router.get('/',  (req, res ) => {
    
    res.json(words)

})

module.exports = router;