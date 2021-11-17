const mongooes = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongooes.connect('mongodb://root:example@mongo:27017/test_my_database?authSource=admin', 
    { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// BlogPost.create({
//     title: 'How to cook the best burger pt. 4',
//     body: 'I am practising Nodejs with BlogPost web application!'
// }, (error, blogpost) => {
//     console.log(error, blogpost);
// });

console.log("Data:");
BlogPost.find({}, (error, blogposts) => {
    console.log(error, blogposts);
}).then((blogposts) => {
    console.log(dataQuery);
});

