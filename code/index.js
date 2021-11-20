const express = require('express');
const app = new express();
// const path = require('path');
const bodyParser = require('body-parser');

const ejs = require('ejs');

// const BlogPost = require('./models/BlogPost.js');

const fileUpload = require('express-fileupload');

const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newPostController = require('./controllers/newPost');
const validateMiddleware = require('./middleware/validationMiddleware');

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.static('public'));

app.use('/posts/store', validateMiddleware)

app.get('/', homeController);
app.get('/index.html', homeController);
app.get('/post/:id', getPostController);
app.post('/posts/store', storePostController);
app.get('/posts/new', newPostController);

app.get('/contact.html', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
});


app.get('/about.html', (req, res) => {
    res.render('about');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});