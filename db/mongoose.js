const mongoose = require('mongoose');

mongoose.connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useFindAndModify: false
});
