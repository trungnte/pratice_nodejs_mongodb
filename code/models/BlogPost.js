const mongooes = require('mongoose');
// mongooes.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true});

const Schema = mongooes.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogPost = mongooes.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;