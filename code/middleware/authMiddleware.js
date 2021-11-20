const User = require('../models/User');
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (err, user) => {
        if(err || !user) {
            console.log(err);
            return res.redirect('/');
        }
        next();
    });
}