const BlogPost = require('../models/BlogPost.js');
const path = require('path');
module.exports = (req, res) => {
    let image = req.files.image;
    let pathUpload = path.resolve(__dirname, '../public/upload/' + image.name);
    console.log(pathUpload);
    image.mv(pathUpload, (error) => {
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name
        }, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                console.log("Create new BlogPost model!");
                res.redirect('/');
            }
        });
    })
}