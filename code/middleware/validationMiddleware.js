module.exports = (req, res, next) => {
    if(req.files == null || req.body.title == null){
        if(req.files == null){
            console.log('No file uploaded');
        }
        if(req.body.title == null){
            console.log('No title');
        }
        console.log('Something was wrong! Validate failed!');
        return res.redirect('/posts/new');
    }
    next();
}