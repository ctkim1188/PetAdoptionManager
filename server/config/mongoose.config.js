const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/examDB', {
    useNewUrlParser: true,
    useUnifiedTopology : true,
})
    .then( () => console.log("database connected examDB"))
    .catch( err => console.log("did NOT connect", err))