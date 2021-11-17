const mongooes = require('mongoose');
// mongooes.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true});
mongooes.connect('mongodb://root:example@mongo:27017/test_my_database?authSource=admin', 
    { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const Schema = mongooes.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogPost = mongooes.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;