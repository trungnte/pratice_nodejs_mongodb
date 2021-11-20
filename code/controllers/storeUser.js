const User = require('../models/User.js');

module.exports = (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect('/auth/register');
        } else {
            res.redirect('/');
        }
    });
};