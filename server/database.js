const mongoose = require('mongoose');

const URI = 'mongodb://localhost/app-node';

mongoose.connect(URI)
    .then(db => console.log('DB OK!'))
    .catch(err => console.error(err));

module.exports = mongoose;