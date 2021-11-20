const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const {username, password} = req.body;
    User.findOne({username: username}, (err, user) => {
        if(err) {
            res.status(500).json({
                message: "Something went wrong"
            });
        } else if(!user) {
            res.status(404).json({
                message: "User not found"
            });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.status(500).json({
                        message: "Something went wrong"
                    });
                } else if(!result) {
                    res.redirect('/auth/login');
                } else {
                    req.session.userId = user._id;
                    res.redirect('/');
                }
            });
        }
    });
}