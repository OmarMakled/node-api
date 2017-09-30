var mongoose = require('mongoose');

var schema = mongoose.Schema({
   name: {
       type: String,
       required: true
   }
});

const Book = mongoose.model('Book', schema);

module.exports = {
    getBooks: function (callback, limit) {
        Book.find(callback).limit(limit);
    },
    getById: function (id, callback) {
       Book.findById(id, callback);
    }
}
