const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser');

const ejs = require('ejs');

const BlogPost = require('./models/BlogPost.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    // res.render('index');
    BlogPost.find({}, (err, posts) => {
        if (err) {
            console.log(err);
        } else {
            console.log(posts);
            res.render('index', { blogposts: posts });
        }
    });
});

app.get('/index.html', (req, res) => {
    // res.render('index');
    BlogPost.find({}, (err, posts) => {
        if (err) {
            console.log(err);
        } else {
            console.log(posts);
            res.render('index', { blogposts: posts });
        }
    });
});

app.get('/contact.html', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
});

// app.get('/post.html', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
//     res.render('post');
// });
app.get('/post/:id', (req, res) => {
    BlogPost.findById(req.params.id, (err, detailPost) => {
        if (err) {
            console.log(err);
        } else {
            res.render('post', { detailPost });
        }
    });
});

app.get('/about.html', (req, res) => {
    res.render('about');
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    console.log(req.body);
    // res.redirect('/');
    // model creates a new doc with browser data
    BlogPost.create(req.body, (err, blogpost) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});