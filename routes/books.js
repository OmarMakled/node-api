var express = require('express');
var router = express.Router();
Book =require('../models/book');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Book.getBooks(function(err, books) {
        if(err){
            throw err;
        }
        res.json(books);
    });
});

router.get('/:_id', function (req, res, next) {
    Book.getById(req.params._id, function(err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

module.exports = router;
