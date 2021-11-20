const BlogPost = require('../models/BlogPost.js');
module.exports = (req, res) => {
    BlogPost.findById(req.params.id, (err, detailPost) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.render('post', {
                detailPost
            });
        }
    });
}