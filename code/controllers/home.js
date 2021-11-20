const BlogPost = require('../models/BlogPost.js');
module.exports = (req, res) => {
    BlogPost.find({}, (err, posts) => {
        console.log(req.session);
        console.log(posts);
        if (err) {
            console.log(err);
            return;
        }
        res.render('index', {
            blogposts: posts
        });
    });
}